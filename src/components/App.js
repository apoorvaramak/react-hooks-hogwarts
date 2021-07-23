import React, {useState} from "react";
import Nav from "./Nav";
import TileArray from "./TileArray"

import hogs from "../porkers_data";


function App() {
	const [isGreased, setIsGreased] = useState(false)
	const [filterBy, setFilterBy] = useState("");

	function handleFilter(event){
		console.log(event.target.value)
		setFilterBy(event.target.value); 
		if(event.target.value === 'Name'){
			hogs.sort(function(a,b){
				let varA = a.name; 
				let varB = b.name;
				if(varA < varB){
					return -1;
				}
				else{
					return 1; 
				}
			})
		}
		if(event.target.value === 'Weight'){
			hogs.sort(function(a,b){
				let varA = a.weight; 
				let varB = b.weight;
				if(varA < varB){
					return -1;
				}
				else{
					return 1; 
				}
			})
		}
	}

	function filterGreased(){
		setIsGreased(isGreased => !isGreased);
	}

	const greasedHogs = hogs.filter((element) => element.greased === true)


	return (
		<div className="App">
			<Nav />
			<button onClick = {filterGreased}>{isGreased ? "Greased" : "All"}</button>
			<select name="filter" onChange={handleFilter}>
				<option value=""></option>
    			<option value="Name">Name</option>
    			<option value="Weight">Weight</option>
  			</select>
			{isGreased ? <TileArray hogs = {hogs}/> : <TileArray hogs = {greasedHogs}/>}
		</div>
	);
}

export default App;
