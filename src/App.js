import React from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Sidebar />
				<h2>App</h2>
			</div>
		</div>
	);
}

export default App;
