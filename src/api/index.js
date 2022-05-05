
function setTimeoutPromise(timeout, values) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(values), timeout);
	});
}


const imageUrls = [
	"https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644851159620-225a1bbb8bb5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644847381517-ec85d23114a3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644845795138-49026e068b98?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644843521796-33876c641aeb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1640622660721-45b83554ab05?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644792325690-062245a3b512?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644851166143-78b9ce6ab0ad?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644760802891-a21a0e26884b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY0NDg3MDAyNQ&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644800327894-e507d53cd4e0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1640622842924-fb0017b9d786?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644780295307-eab5f4f430a3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644780401100-479efdca84dd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644784169245-d470e5811962?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644783850644-d701d48c4228?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1638913661377-abd9e8cf1998?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644669373966-3be56fbaf966?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644851722825-448a109e259f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644836512182-977899856efe?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644838962154-ae285342bd3b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644829419198-d4d63fe7a5ae?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644832512961-a8514afdfed7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644840379571-2a973eee0726?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644842939226-1545819960e1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1640622308205-8ad9478c2386?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644843045247-9d332abe9ae7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644844108025-d7c4e32df250?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644843897867-a2b48a1e8312?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85",
	"https://images.unsplash.com/photo-1644846577076-d57c4c89581e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDE1OTd8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NDQ4NzAwMjU&ixlib=rb-1.2.1&q=85"
]

export function fetchImageUrls() {
	return setTimeoutPromise(500, imageUrls);
}

export function fetchImage(index) {
	return new Promise((resolve, reject) => {
		let url = imageUrls[index]
		if (!url) {
			reject();
		}
		let image = new Image();
		image.src = url;
		image.onload = () => {
			resolve(url);
		}
	});
}

export async function fetchImages() {
	let prefetchedUrlsMap = imageUrls.map((url, index) => {
		return fetchImage(index);
	});
	let prefetchUrls = Array.from(prefetchedUrlsMap.values());
	return Promise.all(prefetchUrls);
}


