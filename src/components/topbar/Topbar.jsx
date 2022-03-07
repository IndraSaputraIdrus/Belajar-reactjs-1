import "./topbar.css"
import Menu from "../menu/Menu"
import {useState} from "react"

const Topbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<nav className={`topbar ${menuOpen && "active"}`}>
				<div className="wrapper">
					<div className="left">
						<a href="#intro" className="logo">INDRA.</a>
					</div>
					<div className="right">
						<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
							<span className="line1"></span>
							<span className="line2"></span>
							<span className="line3"></span>
						</div>
					</div>
				</div>
			</nav>

			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

		</>
	)
}

export default Topbar