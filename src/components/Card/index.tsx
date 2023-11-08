import React from "react";
import { MdNorthEast } from 'react-icons/md'
import './card.css'

type CardProps = {
	name: string
	id?: string
	image?: string
	origin?: string
	handleCardClick: (id: string) => void
	genre?: string
}

/**
 * This card component is used in home page.
 * This component accept name, id, image, origin, handleCardClick: (id: string) => void, genre as props to render the profile card. 
 */

const Card = (props: CardProps) => {
	const { id, name, image, origin, handleCardClick, genre } = props

	return (
		<div className="card-container">
			<div className="image-holder">

				<img
					style={{ width: '100%', aspectRatio: 1 / 1, borderRadius: '0.25rem' }}
					src="/photo.png"
					alt="no image"
				/>

			</div>
			<div className="details-holder">
				<p className="subtitle-two">{name}</p>

				<div style={{ marginTop: '1rem' }}>
					<div className="tag">
						<p className="body">{origin}</p>
					</div>
				</div>

				<div className="tag-container hide-scroll">
					{
						genre?.split(",").map((genre: string, index: number) => {
							return (
								<div className="tag" key={index}>
									<p className="body">{genre}</p>
								</div>
							)
						}
						)
					}

				</div>
			</div>

			<div className="card-icon-holder">
				<div className="icon" onClick={() => handleCardClick(id as string)}>
					<MdNorthEast />
				</div>
			</div>
		</div>
	)
}

export default Card
