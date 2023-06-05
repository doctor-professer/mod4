// Function to move the meme image around the page
function moveMeme() {
    const memeImage = document.getElementById("meme-image");
    
    // Generate random coordinates within the container
    const containerWidth = document.getElementById("meme-container").offsetWidth;
    const containerHeight = document.getElementById("meme-container").offsetHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - memeImage.width));
    const randomY = Math.floor(Math.random() * (containerHeight - memeImage.height));
    
    // Move the image to the random coordinates
    memeImage.style.left = randomX + "px";
    memeImage.style.top = randomY + "px";
  }
  
  // Function to enable/disable the Start button and move the meme image
  function startMoving() {
    const startButton = document.getElementById("start-btn");
    const stopButton = document.getElementById("stop-btn");
    
    startButton.disabled = true; // Disable the Start button
    stopButton.disabled = false; // Enable the Stop button
    
    moveMeme(); // Move the meme image immediately
    
    // Move the meme image every 1 second (1000 milliseconds)
    movingInterval = setInterval(moveMeme, 1000);
  }
  
  // Function to enable/disable the Stop button and stop moving the meme image
  function stopMoving() {
    const startButton = document.getElementById("start-btn");
    const stopButton = document.getElementById("stop-btn");
    
    startButton.disabled = false; // Enable the Start button
    stopButton.disabled = true; // Disable the Stop button
    
    clearInterval(movingInterval); // Stop moving the meme image
  }
  
  // Wire the Start button to the startMoving function using onClick event
  document.getElementById("start-btn").addEventListener("click", startMoving);
  
  // Wire the Stop button to the stopMoving function using onClick event
  document.getElementById("stop-btn").addEventListener("click", stopMoving);
  