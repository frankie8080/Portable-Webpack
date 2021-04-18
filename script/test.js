import "../style/index.scss"

const imageURL = require("../assets/images/image01.jpg")

const img = document.createElement("img")
img.src = imageURL
document.body.appendChild(img)