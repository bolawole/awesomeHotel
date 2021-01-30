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
						<LocationOnIcon /> Osogbo, Osun State
					</p>
					<p>
						<PhoneIcon /> +2347068452016
					</p>
				</div>
				<NavLinks className="header_tab">
					<p>ROOMS & RATES</p>
				</NavLinks>
			</div>
		</div>
	);
};

export default styled(Header)`
	.header {
		background-color: ${setColor.themeColor2};
		.header_pre {
			color: white;
			display: flex;
			/* width: 100%; */
			justify-content: flex-end;
			margin-right: 20px;
			p {
				margin-right: 20px;
			}
		}
	}
`;
const NavLinks = styled.div`
	display: flex;
	color: ${setColor.themeColor3green};
`;
