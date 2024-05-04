import { useEffect, useState } from 'react';

function App() {
	const [advice, setAdvice] = useState(
		'Click 👇🏻 to generate an advice here...'
	);
	const [count, setCount] = useState(0);

	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		setAdvice(data.slip.advice);
		setCount((c) => ++c);
	}

	useEffect(function () {
		getAdvice();
	}, []);

	return (
		<>
			<h1>{advice}</h1>
			<button onClick={getAdvice}>Get Advise</button>
			<p>
				You have read <strong>{count}</strong> pieces of advice.
			</p>
		</>
	);
}

export default App;
