(function(){
	function fechaFoto() {
		document.querySelector(".modal").remove();
		document.querySelector(".foto-modal").remove();
	}

	function abreFoto(src) {
		var modal = document.createElement("div"),
		    img = document.createElement("img");

		modal.classList.add("modal");

		img.src = src;
		img.classList.add("foto-modal");

		modal.addEventListener("click", function (argument) {
			fechaFoto();
		});

		document.body.appendChild(img);
		document.body.appendChild(modal);
	}

	document.body.addEventListener("click", function (evt) {
		if (evt.target.classList.contains("imagem-artigo")) {
			abreFoto(evt.target.src);
		}
	});
})();