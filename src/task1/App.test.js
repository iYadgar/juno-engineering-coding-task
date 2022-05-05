import {fireEvent, render, screen} from '@testing-library/react';
import App                         from "./App";
import {fetchImageUrls}            from "../api";

let imageUrls = [];

beforeAll(async () => {
	render(<App/>)
	imageUrls = await fetchImageUrls()
})
const clickForward = () => fireEvent.click(screen.getByTestId('forward-button'))
test("check if the carousel moves forward", async () => {
	imageUrls.forEach((img) => {
		const presentedImage = screen.getByAltText('Image')
		expect(presentedImage.src).toContain(img)
		clickForward()
	})

});
test("the carousel renders the first image when going forwards from the last image", () => {
	const presentedImage = screen.getByAltText('Image')
	imageUrls.forEach(() => {
		clickForward()
	})
	expect(presentedImage.src).toContain(imageUrls[0])
})

test("the carousel renders the last image when going backwards from the first image", () => {
	fireEvent.click(screen.getByTestId('backward-button'))
	const presentedImage = screen.getByAltText('Image')
	expect(presentedImage.src).toContain(imageUrls[imageUrls.length - 1])
})
