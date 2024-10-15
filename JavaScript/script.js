const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})
window.onload = function () {
	document.getElementById("loader-container").style.display = "none";
}
