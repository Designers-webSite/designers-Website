import React from 'react';

export default function ValidaitonAddUtility(title, designType, description, instructions) {
	let errors = {};
	if (!title) {
		errors.title = 'title is required';
	}
	if (!designType) {
		errors.designType = 'choose design type.';
	}
	if (!description) {
		errors.description = 'description is required';
	}

	if (!instructions) {
		errors.instructions = 'instructions is required.';
	}

	return errors.title || errors.designType || errors.description || errors.instructions ? errors : null;
}
