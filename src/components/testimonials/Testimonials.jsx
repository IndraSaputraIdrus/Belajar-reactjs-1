import "./testimonials.css";
import Section from "../section/Section";
import TestimonialsData from "./TestimonialsData";

const Testimonials = () => {
	return (
		<Section id="testimonials" className="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				{TestimonialsData.map((item) => (
					<div className={item.featured ? "card featured" : "card"}>
						<div className="top">
							<img
								src="/assets/right-arrow.png"
								className="img-arrow"
								alt="right-arrow"
							/>
							<img src={item.image} className="img-user" alt="person" />
							<img src={item.icon} className="icon" alt="icon" />
						</div>
						<div className="center">
							{item.desc}
						</div>
						<div className="bottom">
							<h3>{item.name}</h3>
							<h4>{item.profession}</h4>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Testimonials;
