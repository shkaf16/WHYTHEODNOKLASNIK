const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pops.png") {
    myImage.setAttribute("src", "images/pops2.png");
  } else {
    myImage.setAttribute("src", "images/pops.png");
  }
};
