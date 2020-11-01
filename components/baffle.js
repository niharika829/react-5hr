import React, { Component } from 'react';
import Baffle from 'baffle-react';

export default class Demo extends Component {
	state = {
		update: true,
		obfuscate: true,
	};

	render() {
		const { update, obfuscate } = this.state;

		return (
			<div>
				<button onClick={() => this.setState({ update: !update })}>{update ? 'Pause' : 'Start'}</button>
				<button onClick={() => this.setState({ obfuscate: !obfuscate })}>
					{obfuscate ? 'Reveal' : 'Obfuscate'}
				</button>
				<Baffle
					speed={50}
					characters="!@#$%^&*"
					exclude={[' ', '!']}
					obfuscate={obfuscate}
					update={update}
					revealDuration={1000}
					revealDelay={0}
				>
					!!!foo bar baz!!!
				</Baffle>
			</div>
		);
	}
}
