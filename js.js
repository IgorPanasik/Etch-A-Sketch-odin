const body = document.querySelector('body');
const app = document.createElement('div');
const buttonStart = document.createElement('button');
const blocks = document.querySelectorAll('.block');

body.appendChild(buttonStart);
body.appendChild(app);
app.classList.add('app');
buttonStart.textContent = 'Start';

const addBlocks = (userValue = 16) => {
	app.replaceChildren();

	for (let i = 0; i < userValue * userValue; i++) {
		const block = document.createElement('div');
		block.classList.add('block');
		block.style.width = 100 / userValue + '%';
		block.style.height = 100 / userValue + '%';
		block.style.opacity = '0.1';
		app.appendChild(block);
	}
};

const getUserValue = () => {
	const userValue = parseInt(prompt('Type number <= 100', '10'));
	if (userValue > 100 || userValue <= 0 || !userValue) {
		alert(
			'An invalid valuer. Number cannot be less than 0 or greater than 100.',
		);
		return null;
	}
	return userValue;
};

addBlocks();

const addHover = (e) => {
	if (e.target.classList.contains('block')) {
		let currentOpacity = parseFloat(e.target.style.opacity);
		if (currentOpacity < 1) {
			currentOpacity += 0.1;
			e.target.style.opacity = currentOpacity.toString();
		}
		e.target.style.backgroundColor = `rgba(${Math.floor(
			Math.random() * 256,
		)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
			Math.random() * 256,
		)})`;
	}
};

app.addEventListener('mouseover', addHover);
buttonStart.addEventListener('click', () => {
	const userValue = getUserValue();
	if (userValue) {
		addBlocks(userValue);
	}
});
