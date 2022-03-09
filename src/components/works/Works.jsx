import "./works.css";
import { useState } from "react";
import Section from "../section/Section";
import SliderItem from "./SliderItem";
import SliderData from "./SliderData";

const Works = () => {
	const [sliderPosition, setSliderPosition] = useState(0);

	const handleClick = (way) => {
		if (way === "left") {
			setSliderPosition(sliderPosition > 0 ? sliderPosition-1 : 2);
		} else {
			setSliderPosition(sliderPosition < SliderData.length-1 ? sliderPosition + 1 : 0 );
		}
	};
	return (
		<Section id="works" className="works">
			<div
				className="slider"
				style={{ transform: `translateX(-${sliderPosition * 100}vw)` }}
			>
				{SliderData.map((item) => (
					<SliderItem
						key={item.id}
						icon={item.icon}
						title={item.title}
						desc={item.desc}
						images={item.images}
						tag="Works"
						position={sliderPosition}
					/>
				))}
			</div>
			<img
				src="/assets/arrow.png"
				alt="arrow"
				className="arrow arrow-left"
				onClick={() => handleClick("left")}
			/>
			<img
				src="/assets/arrow.png"
				alt="arrow"
				className="arrow arrow-right"
				onClick={() => handleClick("right")}
			/>
		</Section>
	);
};

export default Works;
