// import "./style/index.css";
// import App from "./components/app.ts";
import { render } from 'preact'
import { html } from 'htm/preact';

const app = html`<div>foo</div>`;
export default app
render(app, document.getElementById('container'));
