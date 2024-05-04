import { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('Click 👇🏻 to generate an advice here...');

	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		setAdvice(data.slip.advice);
	}

	return (
		<>
			<h1>{advice}</h1>
			<button onClick={getAdvice}>Get Advise</button>
		</>
	);
}

export default App;
