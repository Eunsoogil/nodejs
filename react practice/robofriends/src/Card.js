import React from 'react'; // react import안하면 jsx 를 못읽는다는 에러 뜸


//http://robohash.org/ 뒤에 아무 글자나 붙이면 랜덤하게 로봇 이미지 보여줌
//const Card = (props) => { // 방법1
const Card = ({name, email, id}) => { // 방법3
	//const {name, email, id} = props; // 방법2
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`http://robohash.org/${id}?200x200`} />
			<div>
				{/*<h2>{props.name}</h2> 방법 1로 할시*/}
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;