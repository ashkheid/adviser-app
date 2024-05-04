function App() {
	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		console.log(data.slip.advice);
	}

	return (
		<>
			<h1>Advise</h1>
			<button onClick={getAdvice}>Get Advise</button>
		</>
	);
}

export default App;
