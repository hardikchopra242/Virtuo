const piano = document.querySelector("#piano"); //the container
const keys = document.querySelectorAll(".keys");   //Array of all the keys

//The major function which will change the class of the keys and play the corresponding sound
//Function takes key as input which is the element whose class is going to be changed (and not the key we pressed). 
const change = (key) => {
	let sound = document.getElementById(key.dataset.note);
	sound.currentTime =0 ;  // fo that we can overlap the sounds
	sound.play();
	key.classList.add("playing");
}

//We will also make an event listener which will remove the playing class from the keys using the event listener = transitionend.
const endTransition = (key) =>{
	if(key.className == "keys white" || key.className == "keys black" )  //if the class reads this then no problem else delete the playing class.
	// if(key.propertyName)
		return;
	key.classList.remove(`playing`);
}
//When the transition on the button ends we remove the class using the endTransition function
keys.forEach( key => {
	key.addEventListener( "transitionend" , () => endTransition(key) )
});

//Mouse Click Event
keys.forEach( key => {
        key.addEventListener('click' ,() => change(key));
});


//Keyboard Press Event
//Now we will add the key functionality also...
//What we will do is we will make an array of the keys , if the entered key matches the array element we will play that index's audio....
const arrayKeys = ['b','a','s','d','f','g','h','j','k','l', ';' ,"'",'\\','z','x','c','v','q','w','e','r','t','y','u','i','o','p'];

document.addEventListener('keydown' , e => {
	if (e.repeat) return;   //if key pressed for long it returns 
	const key = e.key; //the key we pressed
	const index = arrayKeys.indexOf(key);
	if(index > -1) 
		change(keys[index]);
})









