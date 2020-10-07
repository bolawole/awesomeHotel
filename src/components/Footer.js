import React from "react";
import styled from "styled-components";
import { setColor } from "../global styles/Styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Footer = ({ className }) => {
	return (
		<div className={className}>
			<div className="footer_contact">
				<div className="contact">
					<PhoneIcon />
					<p>Call us Now</p>
					<p>+2347068452016</p>
				</div>
				<div className="contact">
					<EmailIcon />
					<p>For Enquires/Booking</p>
					<p>awesome4services@gmail.com</p>
				</div>
			</div>
			<div className="footer_nav">
				<ul>
					<li>Home</li>
					<li>Rooms</li>
					<li>Gallery</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</div>
	);
};

export default styled(Footer)`
	min-height: 20vh;
	background-color: ${setColor.themeColor2};
	.footer_contact {
		padding-top: 3rem;
		display: flex;
		justify-content: space-evenly;
		.contact {
			color: ${setColor.lettColorlightgray};
			text-align: center;
			.MuiSvgIcon-root {
				color: ${setColor.lettColorlightgray};
			}
			p:last-child {
				color: ${setColor.themeColor3green};
				font-weight: bold;
				line-height: 0;
			}
		}
	}
	.footer_nav {
		margin: 0 25%;
		padding-bottom: 5%;
		ul {
			display: flex;
			justify-content: space-evenly;
			li {
				list-style: none;
			}
		}
	}
`;
