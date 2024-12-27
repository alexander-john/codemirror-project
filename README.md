# CodeMirror Editor with Rollup

This project demonstrates how to integrate **CodeMirror** (a versatile code editor) into a web application using **Rollup** to bundle the JavaScript code. The editor is configured to highlight JavaScript syntax and log the content to the console whenever the user makes changes to the code.

## Features

- CodeMirror editor setup with basic JavaScript syntax highlighting.
- Logs code changes to the console as the user types.
- Bundled using **Rollup** to handle dependencies and create an optimized output file.

## Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/codemirror-rollup.git
cd codemirror-rollup
```

## Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

This will install:

**CodeMirror** for the code editor.

**Rollup** for bundling JavaScript.

`@codemirror/lang-javascript` for JavaScript syntax highlighting.

## Bundle the Code

Run the Rollup command to bundle the code:

```bash
npx rollup -c
```

This will generate a bundled JavaScript file (`editor.bundle.js`) in the `/dist` directory.

## Open the Application

Open the `index.html` file located in the `/dist` folder in your browser. You should see a functional CodeMirror editor, and any changes made will be logged to the browser console.