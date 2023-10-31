import React from "react";
import { MdNorthEast, MdBookmarkBorder } from 'react-icons/md'

type CardProps = {
	name: string
	image?: string
	origin?: string
}



const Card = (props: CardProps) => {
	const { name, image, origin } = props

	return (
		<div className="card-container">
			<div className="image-holder">

				<img
					style={{ width: '100%', aspectRatio: 1 / 1, borderRadius: '0.25rem' }}
					src="/photo.png"
					alt="Grapefruit slice atop a pile of other slices"
				/>

			</div>
			<div className="details-holder">
				<p className="subtitle-two">{name}</p>

				<div className="tag-container">
					<div className="tag">
						<p className="body">{origin}</p>
					</div>
				</div>

				<div className="tag-container">
					<div className="tag">
						<p className="body">Pop</p>
					</div>
					<div className="tag">
						<p className="body">Asian</p>
					</div>
					<div className="tag">
						<p className="body">Others</p>
					</div>

				</div>



			</div>
			<div className="card-icon-holder">
				<div className="icon">
					<MdBookmarkBorder />
				</div>
			</div>
			<div className="card-icon-holder">
				<div className="icon">
					<MdNorthEast />
				</div>
			</div>
		</div>
	)
}

export default Card
