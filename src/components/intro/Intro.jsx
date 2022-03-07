import "./intro.css";
import Section from "../section/Section";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			strings: ["Developer", "Designer", "Content Creator"],
			backDelay: 1500,
			backSpeed: 60,
		});
	}, []);

	return (
		<Section id="intro" className="intro">
			<div className="left">
				<div className="img-container">
					<img src="assets/man.png" alt="profile" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I,m</h2>
					<h1>Indra Saputra Idrus</h1>
					<h3>
						Freelance <span ref={textRef}></span>
					</h3>
				</div>

				<a href="#portfolio" className="down-arrow">
					<img src="assets/down.png" />
				</a>
			</div>
		</Section>
	);
};

export default Intro;
