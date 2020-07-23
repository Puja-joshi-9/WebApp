import React from 'react'

// import './sliderStyle.css'
/*this import and line 3 import are same*/import 'react-animated-slider/build/horizontal.css';


import sliderImageContent from './sliderImage.js';


import Slider from 'react-animated-slider';
function slider() {
 
return(

    <Slider autoplay={3000}>
	{sliderImageContent.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider>

)}
export default slider
