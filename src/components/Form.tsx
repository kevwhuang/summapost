import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

import useOpenModal from '../hooks/useOpenModal';

import '../styles/components/Form.scss';

const base = import.meta.env.VITE_BASE ?? '';
const config = { withCredentials: true };
const defaultValues = {
    date: '',
    image: '',
    keywords: '',
    source: '',
    summary: '',
    title: '',
};

function checkAuth(): boolean {
    if (document.cookie.length === 0) alert('Please login.');
    return Boolean(document.cookie.length);
}

function checkURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function Form(): React.ReactElement {
    const [data, setData] = React.useState(defaultValues);

    function handleChange(e: ChangeEvent): void {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function handleClear(): void {
        setData(defaultValues);
    }

    function transformInput(res: AxiosResponse): Data {
        res.data.source = res.data.url;
        res.data.keywords = res.data.keywords.map((e: string) => e + ', ').join('');
        res.data.keywords = res.data.keywords.slice(0, res.data.keywords.length - 2);
        res.data.image ||= '';
        delete res.data.author;
        delete res.data.url;
        return { ...res.data };
    }

    function transformOutput(): PostData {
        return {
            date: data.date,
            image: data.image,
            keywords: data.keywords.split(', '),
            summary: data.summary,
            title: data.title,
            url: data.source,
        };
    }

    function transformPartial(updateFields: string[], resData: Data): Partial<Data> {
        return Object.fromEntries(updateFields.map(k => [k, resData[k as keyof Data]]));
    }

    async function handleRetrieve(): Promise<void> {
        if (!checkAuth()) return;
        if (!checkURL(data.source)) return alert('The source URL is invalid.');

        const updateFields = Array.from(document.querySelectorAll('option'))
            .filter(e => e.selected)
            .map(e => e.innerText.toLowerCase());
        if (updateFields.length === 0) return alert('You must select at least one field.');

        try {
            if (updateFields.length === 5) {
                const endpoint = `${base}/accept-page?url=${data.source}`;
                const res = await axios.get(endpoint, config);
                setData({ ...data, ...transformInput(res) });
            } else {
                const endpoint = `${base}/accept-page/update`;
                const postData = { updateFields, originalOutput: transformOutput() };
                const res = await axios.post(endpoint, postData, config);
                setData({ ...data, ...transformPartial(updateFields, transformInput(res)) });
            }
        } catch {
            alert('An error has occurred.');
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        if (!checkAuth()) return;
        if (!checkURL(data.source)) return alert('The source URL is invalid.');
        if (data.image && !checkURL(data.image)) return alert('The image URL is invalid.');

        try {
            if (!confirm('Submit to WordPress?')) return;
            const endpoint = `${base}/wordpress/create-post`;
            const res = await axios.post(endpoint, transformOutput(), config);
            if (res.status !== 201) throw Error;
            alert('Success!');
        } catch {
            alert('An error has occurred.');
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__source">
                <div className="form__source--field">
                    <input
                        type="text"
                        name="source"
                        placeholder="Enter source ..."
                        value={data.source}
                        maxLength={200}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__source--selections">
                    <select
                        defaultValue={['title', 'keywords', 'summary', 'image', 'date']}
                        multiple
                    >
                        <option value="title">Title</option>
                        <option value="keywords">Keywords</option>
                        <option value="summary">Summary</option>
                        <option value="image">Image</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <button type="button" onClick={handleRetrieve}>Go</button>
            </div>
            <div className="form__inputs">
                <div className="form__inputs--field">
                    <label htmlFor="input-title">Title</label>
                    <input
                        id="input-title"
                        type="text"
                        name="title"
                        value={data.title}
                        maxLength={200}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__inputs--field">
                    <label
                        htmlFor="input-keywords"
                        title="keyword 1, keyword 2, keyword 3, ..."
                    >
                        Keywords
                    </label>
                    <input
                        id="input-keywords"
                        type="text"
                        name="keywords"
                        value={data.keywords}
                        maxLength={200}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__inputs--field">
                    <label htmlFor="input-summary">Summary</label>
                    <textarea
                        id="input-summary"
                        name="summary"
                        value={data.summary}
                        maxLength={10000}
                        required
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div className="form__inputs--field">
                    <label
                        htmlFor="input-image"
                        title="Click to preview."
                        onClick={useOpenModal}
                    >
                        Image
                    </label>
                    <input
                        id="input-image"
                        type="text"
                        name="image"
                        value={data.image}
                        maxLength={200}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__inputs--field">
                    <label
                        htmlFor="input-date"
                        title="MM/DD/YY"
                    >
                        Date
                    </label>
                    <input
                        id="input-date"
                        type="text"
                        name="date"
                        pattern="\d\d\/\d\d\/\d\d"
                        value={data.date}
                        maxLength={8}
                        required
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form__buttons">
                <button type="submit">Send</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </div>
            <div className="form__help">
                <Link to="help">How do I use the app?</Link>
            </div>
        </form>
    );
}

export default Form;
