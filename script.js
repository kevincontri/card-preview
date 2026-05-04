let bg = document.getElementsByTagName("body")
let img = document.getElementById("card-image")
let learning = document.getElementById("learning")
let title = document.getElementById("title")
let authorName = document.getElementById("author-name")
let button = document.getElementById("toggle")

function toggleTheme() {
  bg[0].classList.toggle("dark-theme-bg")

  learning.classList.toggle("dark-theme-learning")

  title.classList.toggle("dark-theme-text")

  authorName.classList.toggle("dark-theme-text")

  button.classList.toggle("dark-theme-button")

  const toggleImage = () => {
    if (img.src.includes("illustration-article.svg")) {
      img.src = "./assets/dark-illustration.png"
    } else {
      img.src = "./assets/illustration-article.svg"
    }
  }
  toggleImage()
}