let newListItem = document.createElement('li');
		newListItem.innerHTML = "Close the damn door before I punch you in the face!";
		newListItem.setAttribute("class","list-group-item");
let list = document.querySelector('ul');
		list.setAttribute('class','list-group');
		list.appendChild(newListItem);

function newNode(){
	let inputVal = document.getElementById('inputNew').value;
		
	let newLI = document.createElement('li');
		newLI.innerHTML = inputVal;
		newLI.setAttribute('class','list-group-item');
	
	let list = document.querySelector('ul');
		list.setAttribute('class','list-group');
		list.appendChild(newLI);
};





