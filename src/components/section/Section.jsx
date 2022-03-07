import "./section.css"

const Section = ({id, className, children}) => {
	return (
		<section className={`sections ${className}`} id={id}>
			{children}
		</section>
	)
}

export default Section