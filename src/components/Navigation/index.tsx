import React from "react";

const Navigation = () => {
	return (
		<div className="nav-main">
			<div className="nav-container">
				<div className="nav-left">
					<div
						style={{
							width: '48px',
							height: '48px',
							borderRadius: '50%',
							backgroundColor: 'grey'
						}}
					></div>
					<p className="subtitle-two">South Asian Musicians</p>
				</div>
				<div className="nav-right">
					<div>
						<p className="subtitle-two">John Doe</p>
					</div>
					<div>
						<button className="large-secondary-btn"> Sign Out </button>
					</div>
				</div>
			</div>
		</div>

	)

}

export default Navigation
