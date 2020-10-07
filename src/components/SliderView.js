import React from "react";
import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";

const SliderView = ({ className }) => {
	const imagestyle = (src) => ({
		backgroundSize: "cover",
		backgroundImage: `url(${src})`,
		height: "100%",
		// width: "100%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	});

	const images = [
		"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
		"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		"https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	];
	return (
		<div className={className}>
			<Slider hasBullets hasArrows>
				{images.map((each_image) => {
					return (
						<div
							key={each_image}
							draggable="false"
							style={imagestyle(each_image)}
						></div>
					);
				})}
			</Slider>
		</div>
	);
};

export default styled(SliderView)`
	height: 60vh;
	max-width: 1300px;
	margin: 3rem auto;
`;
