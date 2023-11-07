import React from "react";
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'

type CountCardProps = {
	id?: string
	title: string
	value: string
	percentage: string
}

const CountCard = (props: CountCardProps) => {

	const { id, percentage, value, title } = props
	const p = parseInt(percentage)

	return (
		<div className="count-card-container">
			<div className="count-card-up" >
				<p className="body"> {title} </p>
			</div>
			<div className="count-card-down">
				<div style={{ width: '60%' }}>
					<p className="body"> {value ? value : 0} </p>
				</div>

				<div style={{
					display: "flex",
					alignItems: 'center',
					justifyContent: 'flex-end',
					width: '40%',
				}}>
					{
						p >= 0 ?
							<>
								<p className="body positive">{percentage ? percentage : 0}% </p>
								<MdArrowUpward className="positive" height={'48px'} />
							</>
							:
							<>
								<p className="body negative">{percentage ? percentage : 0}% </p>
								<MdArrowDownward className="negative" height={'48px'} />
							</>
					}
				</div>
			</div>
		</div>
	)

}

export default CountCard
