// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const isNL = window.location.href.match('nl')?.length > 0
const optionalPath = (isNL? ".":"");
const playButtonLocation = optionalPath + "./assets/Image/play.png";
const pauseButtonLocation = optionalPath + "./assets/Image/pause.png";

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
    icon.src = pauseButtonLocation;
  } else {
    playSong.pause();
    icon.src = playButtonLocation;
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
  song.src = optionalPath + "./assets/Songs/make-you-feel-my-love-stereo.mp3";
  songName.innerText = "Make You Feel My Love - Adele - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Make You Feel My Love - Adele - Cover Song";
  icon.src = playButtonLocation;
  window.location.href="#play";
});

buttons[1].addEventListener("click", () => {
  const text = "You Won't Relent - Jesus Culture - Cover Song";
  song.src = optionalPath + "./assets/Songs/you-wont-relent.mp3";
  songName.innerText = text;
  songBy.innerText = "Naomi Monsanto";
  title.innerText = text;
  icon.src = playButtonLocation;
  window.location.href="#play";
});

buttons[2].addEventListener("click", () => {
  song.src = optionalPath + "./assets/Songs/lost-without-you-stereo.mp3";
  songName.innerText = "Lost Without You - Krezip - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Lost Without You - Krezip - Cover Song";
  icon.src = playButtonLocation;
  window.location.href="#play";
});

buttons[3].addEventListener("click", () => {
  song.src = optionalPath + "./assets/Songs/arms-around-me-stereo.mp3";
  songName.innerText = "Arms - Christina Perri- Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Arms - Christina Perri- Cover Song";
  icon.src = playButtonLocation;
  window.location.href="#play";
});

buttons[4].addEventListener("click", () => {
  song.src = optionalPath + "./assets/Songs/lucky-jason-mraz-reverb-stereo.mp3";
  songName.innerText = "Lucky - Jason Mraz ft. Colbie Caillat - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "Lucky - Jason Mraz ft. Colbie Caillat - Cover Song";
  icon.src = playButtonLocation;
  window.location.href="#play";
});

buttons[5].addEventListener("click", () => {
  song.src = optionalPath + "./assets/Songs/all-of-me-reverb-stereo.mp3";
  songName.innerText = "All Of Me - John Legend - Cover Song";
  songBy.innerText = "Naomi Monsanto";
  title.innerText = "All Of Me - John Legend - Cover Song";
  icon.src = playButtonLocation;
  window.location.href="#play";
});