const layers = document.querySelectorAll(".img-abs, .bubbles");
const layersDepth = Array.from(layers).map((layer) =>
	layer.dataset.depth ? Number(layer.dataset.depth) : 0.2
);

window.addEventListener("scroll", () => {
	let scrollValue = window.scrollY;
	for (let i = 0; i < layers.length; i++) {
		layers[i].style.top = -scrollValue * layersDepth[i] * 0.5 + "px";
	}
});
