import { h, render, Component } from 'preact'

class App extends Component {
	render() {
        console.warn("in render")
        return h('h1', null, 'Hello World');
	}
}

render(h('div', null, [new App]), document.getElementById('container'))
