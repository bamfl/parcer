import Customizator from './modules/customizator';
import parcer from './modules/parcer';

window.addEventListener('DOMContentLoaded', () => {
	const panel = new Customizator();
	panel.render();

	parcer();
});
