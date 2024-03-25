# SummaPost

SummaPost™ is an AI-powered utility that allows users to summarize the text content of any web page and post data to WordPress.

Version: 1.0.0 (FE)

Date: March 25, 2024

## For Users

### Login

- Users must be authorized to access essential features.
- The password is validated and stored as a cookie.

### Retrieve

- Clicking "Go" utilizes GPT-3.5 Turbo to populate all fields with suggested data.
- A specific set of fields may be rerolled.
- Hold CTRL to select multiple fields in the menu.
- Users may manually edit any of the fields.

### Format

- All fields have a max character limit (200) except summary (10000).
- Source and image must be valid URL strings.
- Keywords must be a comma-separated list with a space after each comma.
- Date must be in MM/DD/YY format.
- The image may be previewed by clicking on the label.

### Submit

- All fields must be non-empty, except image.
- Clicking "Send" will submit the form data to WordPress.
- A blog post will be generated if the form data is valid.

## For Developers

### Development

- Install [Node.js LTS](https://nodejs.org).
- Run <code>npm install</code> to install dependencies.
- Run <code>npm run dev</code> to initiate local front-end server.
