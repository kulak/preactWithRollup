import { h, render, Component } from 'preact'
import { html } from 'htm/preact'

class App extends Component {
	render() {
                return html `<h1>Hello, world!</h1>`
	}
}

render(html `<${App} />`, document.getElementById('container'))
