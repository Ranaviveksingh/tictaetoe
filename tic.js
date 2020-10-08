let cells =document.queryselctorAll('.row>div'); //css ki sari classes select hongii
for (let i=0:i<cells.length:i++){

	//console.log(); //kuch b check krne k liyee
	cells[i].addEventListener('click' , clicked); //add events to this

}

function clicked() {
	console.log(event.target);

	event.target.textContent ='x'
}