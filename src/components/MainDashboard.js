import React from "react";
import styled from "styled-components";
import Services from "./Services";
import { setColor } from "../global styles/Styles";
import Fade from "react-reveal/Fade";

const MainDashboard = ({ className }) => {
	return (
		<div className={className}>
			<div className="reveal">
				<Fade right delay={1000} duration={2000} effect="fadeInRight">
					<h2>Welcome To Awesome Hotel</h2>
					<p>Your One stop for finest services and hospitality</p>

					<div className="maindashboard_about">
						<p>
							" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							dignissimos aut dolorum ipsam. Doloribus facilis praesentium
							incidunt corrupti quam sint aperiam ipsa? Itaque, repellendus
							explicabo nisi illum veritatis distinctio corporis, necessitatibus
							excepturi a, dignissimos nobis numquam aperiam quia provident
							quisquam laudantium in minima! Est earum rem officia modi error
							necessitatibus sapiente minus mollitia odit non, pariatur qui
							inventore natus ipsa voluptatum, dolor dolorum ab voluptatibus.
							Libero deleniti, delectus amet dolores deserunt error
							necessitatibus dolore sit voluptas qui, ipsum porro aut illum
							officiis atque quas. Quidem eveniet illum sunt reprehenderit a."
						</p>
					</div>
					<div className="maindashboard_services">
						<Services />
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default styled(MainDashboard)`
	text-align: center;
	color: ${setColor.themeColor1};
	h2 {
		font-size: 30px;
		font-family: "Roboto", sans-serif;
	}
	p {
		font-family: "Roboto", sans-serif;
	}
	.reveal {
		width: 80%;
		margin: auto;
		.maindashboard_about {
			font-style: italic;
			color: ${setColor.letterColordark}8c;
		}
	}
`;
