import "./portfolio.css";
import Section from "../section/Section";
import PortfolioList from "../portfolioList/PortfolioList";
import * as images from "./PortfolioImagesData";
import { useState, useEffect } from "react";

const Portfolio = () => {
	const portfolioListItem = [
		{ title: "Featured" },
		{ title: "Web App" },
		{ title: "Mobile App" },
		{ title: "Design" },
		{ title: "Branding" },
	];

	const [selected, setSelected] = useState("Featured");
	const [imgData, setImgData] = useState([]);

	useEffect(() => {
		switch (selected) {
			case "Featured":
				setImgData(images.featured);
				break;
			case "Web App":
				setImgData(images.webApp);
				break;
			case "Mobile App":
				setImgData(images.mobileApp);
				break;
			case "Design":
				setImgData(images.design);
				break;
			case "Branding":
				setImgData(images.branding);
				break;
			default:
				setImgData(images.featured);
		}
	}, [selected]);

	return (
		<Section id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{portfolioListItem.map((item) => (
					<PortfolioList
						key={item.title}
						active={selected === item.title}
						setSelected={setSelected}
					>
						{item.title}
					</PortfolioList>
				))}
			</ul>

			<div className="container">
				{imgData.map((item) => (
					<div className="item">
						<img src={item.img} alt="project" />
						<h3>{item.title}</h3>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Portfolio;
