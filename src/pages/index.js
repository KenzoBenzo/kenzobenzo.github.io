import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<h1>Hey, I am Makenna!</h1>
				<p>I am uniquely skilled in design, development & marketing.<br />I would love to combine these into a position such as: <br/>developer advocate, marketing developer, or product manager.</p>
				<Link to="/page-2/">Hire Me</Link>
			</div>
		)
	}
}
