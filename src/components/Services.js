import React from "react";
import CardItems from "./CardItems";
import styled from "styled-components";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
const Services = ({ className }) => {
	const services = [
		{
			text:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloribus recusandae voluptates illum ipsa dignissimos sed numquam facilis libero voluptas",
			heading: "CAR PARKING",
			img: <DirectionsCarIcon />,
		},
		{
			text:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloribus recusandae voluptates illum ipsa dignissimos sed numquam facilis libero voluptas",
			heading: "WIFI",
			img: <WifiIcon />,
		},
		{
			text:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloribus recusandae voluptates illum ipsa dignissimos sed numquam facilis libero voluptas",
			heading: "DINNING",
			img: <LocalDiningIcon />,
		},
	];
	return (
		<div className={className}>
			<h1>Services</h1>
			<p>we are a Hotel that offers different services</p>
			<div className="servicelist">
				{services.map((service) => {
					return (
						<CardItems
							img={service.img}
							header={service.heading}
							text={service.text}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default styled(Services)`
	margin-top: 3rem;
	.servicelist {
		display: flex;
		justify-content: center;
	}
`;
