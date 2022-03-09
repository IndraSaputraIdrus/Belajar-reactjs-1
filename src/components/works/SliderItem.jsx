const SliderItem = ({icon, title, desc, tag, images}) => {
	return (
		<div className="container">
			<div className="item">
				<div className="left">
					<div className="leftContainer">
						<div className="imgContainer">
							<img src={icon} />
						</div>
						<h2>{title}</h2>
						<p>
							{desc}
						</p>
						<span>{tag}</span>
					</div>
				</div>
				<div className="right">
					<img src={images} alt="works" />
				</div>
			</div>
		</div>
	);
};

export default SliderItem;
