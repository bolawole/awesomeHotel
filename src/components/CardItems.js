import React from "react";
import styled from "styled-components";

const CardItems = ({ img, header, text, className }) => {
	return (
		<div className={className}>
			{img}
			<h5>{header}</h5>
			<p>{text}</p>{" "}
		</div>
	);
};

export default styled(CardItems)`
	height: 100%;
	width: 500px;
	margin-right: 10px;
	.MuiSvgIcon-root {
		font-size: 5rem;
	}
`;
