const parcer = () => {
	const getH1Content = element => {
		if (element.nodeName === "H1") {
			const contentH1 = element.textContent;

			const objH1 = {
				h1: contentH1
			};

			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(objH1)
			})
			.then(response => response.json())
			.then(obj => console.log(obj));
		}
	};

	const recursy = element => {
		element.children.forEach(child => {
			if (child.nodeName !== "SCRIPT") {
				getH1Content(child);

				if (child.children.length > 1) {
					recursy(child);
				}
			}
		});
	};

	recursy(document.body);
};

export default parcer;
