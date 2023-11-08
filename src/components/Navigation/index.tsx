import React from "react";
import Cookies from 'js-cookie';
import './navigation.css'


/**
 * Navigation component is used in home layout 
 * This component renders brand title, user name and signout button 
 */

const Navigation = () => {
	// removes the cookie and redirects to login page
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
					<div className="hide">
						<p className="subtitle-two">{Cookies.get("testUserAuthenticated")}</p>
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
