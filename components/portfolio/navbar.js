import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from './neha_resume.pdf';
function Navbar() {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<span className="navbar-brand">Niharika Sharma</span>

				<ul className="navbar-nav" style={{ marginLeft: '60%' }}>
					<Link to="/">
						<li className="nav-item active nav-link">Home</li>
					</Link>
					<Link to="/projects">
						<li className="nav-item nav-link">Projects/Skills</li>
					</Link>
					<Link to="/contactMe">
						<li className="nav-item nav-link">Contact</li>
					</Link>

					<li className="nav-item nav-link">
						<a className="btn" target="_blank" href={Resume}>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
