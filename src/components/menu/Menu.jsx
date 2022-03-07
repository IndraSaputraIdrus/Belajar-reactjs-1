import "./menu.css";
import MenuLink from "./MenuLink";

const Menu = ({menuOpen, setMenuOpen}) => {
	const listLink = [
		{link: "#intro", title: "Home"},
		{link: "#portfolio", title: "Portfolio"},
		{link: "#works", title: "Works"},
		{link: "#testimonials", title: "Testimonials"},
		{link: "#contact", title: "Contact"},
	]

	return (
		<div className={`menu ${menuOpen && "active"}`}>
			<ul className="menu-links">
				{listLink.map( item => (
					<MenuLink key={item.link} link={item.link} title={item.title} event={() => setMenuOpen(false)}/>
				))}
			</ul>
		</div>
	);
};

export default Menu;
