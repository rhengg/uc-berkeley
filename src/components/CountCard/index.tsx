import React from "react";
import { MdArrowUpward } from 'react-icons/md'
import '../../css/styles.css'
const CountCard = () => {
	return (
		<div className="count-card-container">
			<div className="count-card-up" >
				<p className="body"> Followers </p>
			</div>
			<div className="count-card-down">
				<div style={{ width: '60%' }}>
					<p className="body"> 1900000 </p>
				</div>

				<div style={{
					display: "flex",
					border: '1px solid red',
					alignItems: 'center',
					width: '40%',
					justifyContent: 'flex-end'
				}}>
					<div style={{ width: '50%', border: '1px solid red' }}>
						<p className="body">8% </p>
					</div>

					<div style={{ width: '50%', height: '100%', border: '1px solid red' }}>
						<div className="icon">
							<MdArrowUpward />
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default CountCard
