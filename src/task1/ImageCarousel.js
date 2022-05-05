import React, {useEffect, useState}                       from "react";
import {Alert, CircularProgress, Fab, Skeleton, Snackbar} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos}                    from "@mui/icons-material";
import {fetchImageUrls}                                   from "../api";
import './ImageCarousel.css'
import CarouselImage                                      from "./CarouselImage";


const ImageCarousel = () => {
	const [images, setImages] = useState([]);
	const [currentDisplayedImgIndex, setCurrentDisplayedImgIndex] = useState(0);
	const [isImagesLoading, setIsImagesLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		const getImages = async () => {
			try {
				setIsImagesLoading(true)
				const images = await fetchImageUrls()
				setImages(images)
			} catch (e) {
				setIsError(true)
			} finally {
				setIsImagesLoading(false)
			}
		}
		getImages()

	}, [])
	const handleIndexUpdate = (shouldAdd) => {
		setCurrentDisplayedImgIndex((index) => {
			if (shouldAdd) {
				if (index !== images.length - 1) {
					return index + 1
				}
				return 0
			}
			return index === 0 ? images.length - 1 : index - 1
		})
	}
	const renderCarousel = () => {
		if (!images.length && !isImagesLoading) {
			return <>
				<Snackbar open={isError} anchorOrigin={{vertical: "top", horizontal: "center"}}>
					<Alert severity="error">No images found</Alert>
				</Snackbar>
				<Skeleton variant="rectangular"
						  className='skeleton'/></>


		}
		return isImagesLoading ? <CircularProgress/> :
			   <CarouselImage className="displayed-image" imageUrl={images[currentDisplayedImgIndex]}/>

	}
	return <>
		<Fab disabled={isError} data-testid="backward-button" onClick={() => handleIndexUpdate(false)}>
			<ArrowBackIos/>
		</Fab>
		<div className="carousel-container">
			{renderCarousel()}
		</div>
		<Fab disabled={isError} data-testid="forward-button" onClick={() => handleIndexUpdate(true)}>
			<ArrowForwardIos/>
		</Fab>
	</>;
};
export default ImageCarousel;
