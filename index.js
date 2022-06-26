const layers = document.querySelectorAll(".parallax-layer");
const layersDepth = Array.from(layers).map((layer) =>
	layer.dataset.depth ? Number(layer.dataset.depth) : 0.2
);

window.addEventListener("scroll", () => {
	let scrollValue = window.scrollY;
	for (let i = 0; i < layers.length; i++) {
		layers[i].style.top = -scrollValue * layersDepth[i] + "px";
	}
});
