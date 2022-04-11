const coverMessage = document.querySelector(".cover").querySelector("p");
const actionButton = document.getElementById("actionButton");
const hiddenContainer = document.getElementById("hiddenContainer");
const menuIcon = document.getElementById("menuIcon").querySelector("img");
const menuBlock = document.getElementById("floatBlock");
const closeButton = document.getElementById("closeButton");



const changeCoverMessage = () =>{
	return coverMessage.innerHTML = '<strong>Have a Good Time!</strong>';
}

const showLowerContent = () =>{
  	hiddenContainer.style.display = "block";
}

const openMenu = () =>{
	menuIcon.style.display = "none";
	menuBlock.style.display = "block";
	closeButton.style.display = "block";
}

const closeMenu = () =>{
	menuIcon.style.display = "block";
	menuBlock.removeAttribute("style");
	closeButton.removeAttribute("style");
}


coverMessage.addEventListener("click" ,changeCoverMessage);
actionButton.addEventListener("click" ,showLowerContent);
menuIcon.addEventListener("click" ,openMenu);
closeButton.addEventListener("click" ,closeMenu);
