import "./portfolioList.css";

const PortfolioList = ({children, active, setSelected}) => {
	return (
		<>
			<li className={`portfolio-list ${active && "active"}`} onClick={()=> setSelected(children)}>{children}</li>
		</>
	);
};

export default PortfolioList;
