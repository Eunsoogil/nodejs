import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	if(typeof box.length === 'undefined'){
		return (
			<div className='center ma'>
				<div className="absolute mt2">
					<img id="inputImage" alt="" src={imageUrl} width='500px' height='auto'/>
					<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
				</div>
			</div>
		)
	} else {
		return (
			<div className='center ma'>
				<div className="absolute mt2">
					<img id="inputImage" alt="" src={imageUrl} width='500px' height='auto'/>
					{
						box.map((faces, i) => {
							return (
								<div className='bounding-box' style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>
							);
						})
					}
				</div>
			</div>
		)
	}

}

export default FaceRecognition;