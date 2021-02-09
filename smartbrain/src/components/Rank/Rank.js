import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}님, 안면인식을 ${entries}번 사용하셨습니다!`}
			</div>
		</div>
	)
}

export default Rank;