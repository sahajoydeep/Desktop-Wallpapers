function randomImage() {
    const options = ["images/2084220.jpg", "images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg", "images/image12.jpg"];
    const img = document.querySelector("#desktop");
    setInterval(function() {
        const randomIMG = options[Math.floor(Math.random() * options.length)];
        img.src = randomIMG;
        img.alt = "";
    }, 3000); 
}
    const colors = [
        "rgb(255, 218, 185)", // Peach
        "rgb(173, 216, 230)", // Light Blue
        "rgb(144, 238, 144)", // Light Green
        "rgb(255, 192, 203)", // Pink
        "rgb(221, 160, 221)", // Lavender
        "rgb(255, 250, 205)", // Lemon Chiffon
        "rgb(176, 224, 230)", // Powder Blue
        "rgb(255, 228, 196)", // Bisque
        "rgb(240, 255, 240)", // Honeydew
        "rgb(245, 245, 220)", // Beige
        "rgb(240, 248, 255)", // Alice Blue
        "rgb(255, 222, 173)", // Navajo White
        "rgb(230, 230, 250)", // Lavender Blue
        "rgb(240, 255, 240)", // Honeydew
        "rgb(255, 240, 245)"  // Lavender Blush
      ];
      
  let currentIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000);