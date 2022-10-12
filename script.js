let chapter = 0;
const buttons = document.getElementById("tools").getElementsByClassName("buttons")[0];
const nextSlide = document.getElementById("nextSlide");
const previousSlide = document.getElementById("previousSlide");
const nextChapter = document.getElementById("nextChapter");
const previousChapter = document.getElementById("previousChapter");
const restart = document.getElementById("restart");
const chapters = document.getElementsByClassName("chapter");
const chapterLengths = chapters.map((chapter) => parseInt(chapter.style.width.slice(0, -4)));
const slides = chapters.map((chapter) => 0);
const titles = document.querySelectorAll("#titles > span");

function moveChapter(amount) {
  chapter += amount;
  if (chapter < 0) {
    chapter = 0;
  } else if (chapter == chapterLengths[chapter]) {
    chapter = chapterLengths[chapter] - 1;
  }
  titles[chapter].querySelector(".position").innerHTML = slides[chapter] + 1;
  chapter.style.translate = "-" + slides[chapter] + "00vw" + chapter + "00vh";
}

function moveSlide(amount) {
  
  slides += amount;
  if (slides < 0) {
    slides = 0;
  } else if (slide == chapterLength) {
    slides = chapterLength - 1;
  }
  title.querySelector(".position").innerHTML = slides + 1;
  chapter.style.translate = "-" + slides + "00vw 0";
}

function fadeButtons() {
  buttons.style.opacity = 0.05;
}

function unfadeButtons(e) {
  buttons.style.opacity = 1; 
}

nextSlide.addEventListener("click", (e) => { moveSlide(1) });
previousSlide.addEventListener("click", (e) => { moveSlide(-1) });
nextChapter.addEventListener("click", (e) => { moveChapter(1) });
previousChapter.addEventListener("click", (e) => { moveChapter(-1) });
restart.addEventListener("click", (e) => { moveSlide(- slides) });
buttons.addEventListener("mouseenter", unfadeButtons);
buttons.addEventListener("mouseleave", fadeButtons);
title.style.display = "inline";
setTimeout(fadeButtons, 2500);
