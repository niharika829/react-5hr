import React from 'react';
import ParticlesBg from 'particles-bg';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
	return (
		<div>
			<MDBContainer className="mt-5 text-center intro">
				<MDBRow>
					<MDBCol>
						<MDBJumbotron style={{ backgroundColor: '#BF00FF' }}>
							<h2 className="h1 display-3"> connect with me:-</h2>
							<p className="lead">
								<div className="container">
									<div className="row">
										<div className="col-md-4">
											<a target="_blank" href="https://github.com/niharika829">
												<FaGithub size={130} />
											</a>
										</div>

										<div className="col-md-4">
											<a target="_blank" href="https://www.linkedin.com/in/-niharika-sharma/">
												<FaLinkedin size={130} />
											</a>
										</div>
										<div className="col-md-4">
											<a target="_blank" href="https://twitter.com/Niharik05434944">
												<FaTwitter size={130} />
											</a>
										</div>
									</div>
								</div>
							</p>
						</MDBJumbotron>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<ParticlesBg type="cobweb" bg={true} />
		</div>
	);
}
export default Contact;
