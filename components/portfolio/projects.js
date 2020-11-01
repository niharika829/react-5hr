import React, { Component } from 'react';
import { CircleProgress } from 'react-gradient-progress';
import { FaGithub } from 'react-icons/fa';

export class projects extends Component {
	render() {
		return (
			<div className="portfolio-container ">
				<div className="container-fluid">
					<div className="row">
						<h2 style={{ marginLeft: '1%', marginBottom: '6%', marginTop: '4%' }} className="intro">
							Skills
						</h2>
						<br />
					</div>
					<div className="row">
						{this.props.skillset.map((skillset) => (
							<div style={{ marginLeft: '1%', marginBottom: '6%' }}>
								<CircleProgress
									percentage={skillset.percentage}
									strokeWidth={8}
									secondaryColor="#f0f0f0"
									primaryColor="black"
									fontSize="40px"
								/>
								<p className="intro" style={{ color: 'black', fontSize: '20px' }}>
									{skillset.name}
								</p>
							</div>
						))}
					</div>

					<div className="row">
						<div className="row">
							<h2 style={{ marginLeft: '3%', marginBottom: '6%', marginTop: '6%' }} className="intro">
								Have A Look
							</h2>
							<br />
						</div>
						<div className="row">
							{this.props.title.map((post) => (
								<div
									className="card text-white bg-dark mb-3"
									style={{
										maxWidth: '38rem',
										marginLeft: '3%',
										height: '17rem',
									}}
								>
									<div className="card-header">{post.name}</div>
									<div className="row">
										<div className="col-sm-3">
											{/* <img
												src={post.img}
												alt={post.name}
												style={{ width: '100%', height: '100%' }}
											/> */}
											<FaGithub size={150} />
										</div>
										<div className="col-sm-7">
											<div className="card-body">
												<h5 className="card-title">{post.technology}</h5>
												<p className="card-text">{post.timeline}</p>
												<p className="card-text">About:-</p>
												<p className="card-text">{post.about}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default projects;
