import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className = 'f4'>
				{'이미지 주소(이미지 URL)을 입력하시면 안면인식됩니다!'}
			</p>
			<p className = 'f4'>
				{'인터넷에 올라온 이미지를 우클릭, 이미지 주소 복사하시면 됩니다 :)'}
			</p>
			<div className = 'center'>
				<div className = "form center pa4 br3 shadow-5">
					<input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange}/>
					<button
						className="w-30 grow f4 link ph3 pv2 dib white bg-black"
						onClick={onButtonSubmit}
					>안면인식</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;