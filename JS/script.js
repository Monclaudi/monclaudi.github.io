// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  song.src = "./assets/Songs/make-you-feel-my-love-stereo.mp3";
  songName.innerText = "Make You Feel My Love - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Make You Feel My Love - Cover Song";
  icon.src = "./assets/Image/play.png";
  window.location.href="#play";
});

buttons[1].addEventListener("click", () => {
  song.src = "./assets/Songs/you-wont-relent.mp3";
  songName.innerText = "You Won't Relent - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "You Won't Relent - Cover Song";
  icon.src = "./assets/Image/play.png";
  window.location.href="#play";
});

buttons[2].addEventListener("click", () => {
  song.src = "./assets/Songs/lost-without-you-stereo.mp3";
  songName.innerText = "Lost Without You - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Lost Without You - Cover Song";
  icon.src = "./assets/Image/play.png";
  window.location.href="#play";
});

buttons[3].addEventListener("click", () => {
  song.src = "./assets/Songs/arms-around-me-stereo.mp3";
  songName.innerText = "Arms - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Arms - Cover Song";
  icon.src = "./assets/Image/play.png";
  window.location.href="#play";
});