import React from 'react';
import { Planet } from 'react-kawaii';

const Example = () => {
	return (
		<div className="portfolio-container">
			<div className="container">
				<div className="row">
					<div className="col-md-6" style={{ marginTop: '30px' }}>
						<Planet size={400} mood="shocked" color="#FDA7DC" />
					</div>
					<div className="col-md-6 intro">
						<p>NotFound!</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Example;
