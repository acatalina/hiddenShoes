import React from 'react'; // eslint-disable-line no-unused-vars


const LineThrough = props => {
	const styles = {
		backgroundColor: props.backgroundColor || '#333',
		width: '100%',
		height: '1px',
		margin: '2em 0'
	};

	return (
		<div style={styles}></div>
	);
};

export default LineThrough;