import React from 'react';

import '../styles/components/Info.scss';

function Info(): React.ReactElement {
    return (
        <div className="info">
            <article>
                <h1>SummaPost</h1>
                <p>SummaPost™ is an AI-powered utility that allows users to summarize the text content of any web page and post data to WordPress.</p>
                <p>Version: 1.0.0 (FE)</p>
                <p className="last">Date: March 25, 2024</p>
            </article>
            <article>
                <h2>For Users</h2>
                <h3>Login</h3>
                <p>Users must be authorized to access essential features.</p>
                <p className="last">The password is validated and stored as a cookie.</p>
                <h3>Retrieve</h3>
                <p>Clicking "Go" utilizes GPT-3.5 Turbo to populate all fields with suggested data.</p>
                <p>A specific set of fields may be rerolled.</p>
                <p>Hold CTRL to select multiple fields in the menu.</p>
                <p className="last">Users may manually edit any of the fields.</p>
                <h3>Format</h3>
                <p>All fields have a max character limit (200) except summary (10000).</p>
                <p>Source and image must be valid URL strings.</p>
                <p>Keywords must be a comma-separated list with a space after each comma.</p>
                <p>Date must be in MM/DD/YY format.</p>
                <p className="last">The image may be previewed by clicking on the label.</p>
                <h3>Submit</h3>
                <p>All fields must be non-empty, except image.</p>
                <p>Clicking "Send" will submit the form data to WordPress.</p>
                <p className="last">A blog post will be generated if the form data is valid.</p>
            </article>
            <article>
                <h2>For Developers</h2>
                <h3>Development</h3>
                <p>Install <a href="https://nodejs.org" target="_blank">Node.js LTS.</a></p>
                <p>Run <code>npm install</code> to install dependencies.</p>
                <p>Run <code>npm run dev</code> to initiate local front-end server.</p>
            </article>
        </div>
    );
}

export default Info;
