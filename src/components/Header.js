import React from "react";
import styled from "styled-components";
import { setColor } from "../global styles/Styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
const Header = ({ className }) => {
	return (
		<div className={className}>
			<div className="header">
				<div className="header_pre">
					<p>
						{" "}
						<LocationOnIcon /> Osogbo, Osun State
					</p>
					<p>
						{" "}
						<PhoneIcon /> +2347068452016
					</p>
				</div>
				<div className="header_tab">
					<p>Home</p>
					<p>ROOMS & RATES</p>
					<p>AMENITIES</p>
					<p>GALLERY</p>
					<p>LOCATION & CONTACT</p>
				</div>
			</div>
		</div>
	);
};

export default styled(Header)`
	color: ${setColor.themeColor3green};
	.header {
		background-color: ${setColor.themeColor2};
		.header_pre {
			display: flex;
		}
		.header_tab {
			margin: 0 25%;
			display: flex;
			/* width: 100%; */
			justify-content: space-around;
			font-weight: 500;
		}
	}
`;
