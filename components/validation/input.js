import React, { Component } from 'react';
const input = ({ name, label, value, onchange, id, type, error }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				onChange={onchange}
				value={value}
				className="form-control"
				id={id}
				placeholder="Enter text"
				name={name}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default input;
