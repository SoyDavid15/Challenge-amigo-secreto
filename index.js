document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			// Aquí puedes agregar la lógica que desees ejecutar al enviar el formulario
			const input = document.getElementById('name');
			const nombre = input.value.trim();
			if (nombre) {
				const lista = document.getElementById('lista-nombres');
				const li = document.createElement('li');
				li.textContent = nombre;
				lista.appendChild(li);
				input.value = '';
			}
		});
	}
	// Lógica para sortear amigo secreto
	const sortearBtn = document.getElementById('sortear-btn');
	if (sortearBtn) {
		sortearBtn.addEventListener('click', function() {
			const lista = document.getElementById('lista-nombres');
			const resultado = document.getElementById('resultado-sorteo');
			const nombres = Array.from(lista.children).map(li => li.textContent);
			if (nombres.length === 0) {
				resultado.textContent = 'No hay nombres para sortear.';
				return;
			}
			const indice = Math.floor(Math.random() * nombres.length);
			resultado.textContent = `El amigo secreto es: ${nombres[indice]}`;
		});
	}
});
