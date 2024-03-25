'use strict';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Data {
    date: string;
    image: string;
    keywords: string;
    source: string;
    summary: string;
    title: string;
}

interface PostData {
    date: string;
    image: string;
    keywords: string[];
    summary: string;
    title: string;
    url: string;
}
