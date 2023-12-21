import { useEffect } from 'react';
function App() {
	useEffect(() => {
		fetch('/bacon')
			.then((res) => res.json())
			.then((data) => console.log(data.data));
	}, []);
	return <div className='App'>hello</div>;
}

export default App;
