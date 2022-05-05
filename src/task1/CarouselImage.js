import React, {useState}  from 'react';
import {CircularProgress} from "@mui/material";

const CarouselImage = ({imageUrl, className}) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	return <>
		<img style={isImageLoaded ? {} : {display: 'none'}} className={className} src={imageUrl} alt="Image"
			 onLoad={() => setIsImageLoaded(true)}/>
		{isImageLoaded ? null : <CircularProgress/>}
	</>;
};

export default CarouselImage;
