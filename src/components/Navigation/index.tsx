import React from "react";
import Cookies from 'js-cookie';


const Navigation = () => {
	const handleSignOut = () => {
		Cookies.remove("testUserAuthenticated");
		window.location.replace("/login")
	}
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
						<button className="large-secondary-btn" onClick={handleSignOut}> Sign Out </button>
					</div>
				</div>
			</div>
		</div>

	)

}

export default Navigation
