import React from "react";
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'
import '../../css/styles.css'

type CountCardProps = {
	id?: string
	title: string
	value: string
	percentage: string
	percentageStatus?: 'inc' | 'dec'
}

const CountCard = (props: CountCardProps) => {

	const { id, percentage, value, title, percentageStatus } = props

	return (
		<div className="count-card-container">
			<div className="count-card-up" >
				<p className="body"> {title} </p>
			</div>
			<div className="count-card-down">
				<div style={{ width: '60%' }}>
					<p className="body"> {value} </p>
				</div>

				<div style={{
					display: "flex",
					alignItems: 'center',
					justifyContent: 'flex-end',
					width: '40%',
				}}>
					{
						percentageStatus === 'inc' ?
							<>
								<p className="body positive">{percentage}% </p>
								<MdArrowUpward className="positive" height={'48px'} />
							</>
							:
							<>
								<p className="body negative">{percentage}% </p>
								<MdArrowDownward className="negative" height={'48px'} />
							</>
					}
				</div>
			</div>
		</div>
	)

}

export default CountCard
