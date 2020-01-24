import React, { useState } from 'react';
import './App.css';

function App() {
	const [gridBox, setGrid] = useState([false, false, false, false, false, false, false, false, false])

	function onClick(ev) {
		ev.preventDefault();
		const target = ev.target;
		const idx = target.id;
		//toggle gridBox element value & color
		if( gridBox[idx] === false ) {
			gridBox[idx] = true;
			// true-blue
			target.style["background-color"] = `rgb(0,100,255)`
		} else {
			gridBox[idx] = false;
			// white
			target.style["background-color"] = `rgb(255,255,255)`
		}
	}
	return (
		<div className="App">
			<div className='grid'>
				<div className='row'>
					<div className='box' id='0' value={gridBox[0]}
								onClick={onClick}></div>
					<div className='box' id='1' value={gridBox[1]}
								onClick={onClick}></div>
					<div className='box' id='2' value={gridBox[2]}
								onClick={onClick}></div>
				</div>
				<div className='row'>
					<div className='box' id='3' value={gridBox[3]}
								onClick={onClick}></div>
					<div className='box' id='4' value={gridBox[4]}
								onClick={onClick}></div>
					<div className='box' id='5' value={gridBox[5]}
								onClick={onClick}></div>
				</div>
				<div className='row'>
					<div className='box' id='6' value={gridBox[6]}
								onClick={onClick}></div>
					<div className='box' id='7' value={gridBox[7]}
								onClick={onClick}></div>
					<div className='box' id='8' value={gridBox[8]}
								onClick={onClick}></div>
				</div>
			</div>
		</div>
	);
}

export default App;
