const MenuLink = ({link, title, event}) => {
	return (
		<li className="link-item">
			<a onClick={event} href={link}>{title}</a>
		</li>
	)
}

export default MenuLink