import "./menu.css";
import MenuLink from "./MenuLink";
import listLink from "./MenuData";

const Menu = ({menuOpen, setMenuOpen}) => {
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
