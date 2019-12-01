import { h, Component, render } from 'preact'
import { html } from 'htm/preact';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		console.warn("in render")
		return html `
            <div id="app2">
            my app
			</div>
		`
	}render
}
