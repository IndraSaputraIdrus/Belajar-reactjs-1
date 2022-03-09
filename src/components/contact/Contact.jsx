import "./contact.css"
import Section from "../section/Section"
import {useState} from "react";

const Contact = () => {
	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);

		alert("Thanks, I,ll reply ASAP");
	}

	return (
		<Section id="contact" className="contact">
		<div className="container">
			
			<div className="left">
				<img className="img-contact" src="/assets/shake.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact</h2>
				<form action="" className="contact-form" onSubmit={handleSubmit}>
					<input type="text" name="email" id="email" placeholder="Email" autoComplete="off"/>
					<textarea name="message" id="message"></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
		</Section>
	)
}

export default Contact