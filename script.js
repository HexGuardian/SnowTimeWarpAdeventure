// JavaScript code to handle the game
let gameText = document.getElementById("gameText");
let choiceButton1 = document.getElementById("choiceButton1");
let choiceButton2 = document.getElementById("choiceButton2");

//initiate game state
let gameState = 0;

function startGame() {
  // Function to update the game based on player choices
  switch (gameState) {
    case 0:
      gameText.textContent =
        "Snow White and her seven dwarfs stood before the spaceship's holographic display, pondering their next destination for this cosmic adventure.";
      choiceButton1.textContent = "Explore the Rings of Saturn";
      choiceButton2.textContent = "Visit a Distant Nebula";
      break;
    case 1:
      gameText.textContent =
        "Snow White was captivated by the idea of exploring the magnificent rings of Saturn. 'Let's go to Saturn, she decided with a sense of wonder'.The spaceship's engines roared to life as it soared through the vastness of space. As they approached Saturn, they marveled at the rings, which glistened like a crown of jewels. They had chosen wisely, and their hearts filled with awe. 'You've arrived at Saturn's rings. What do you want to do next?'";
      choiceButton1.textContent =
        "Take a closer look at the rings: Fly the spaceship closer to Saturn's rings to examine them in detail.";
      choiceButton2.textContent =
        "Search for a moon to explore: Look for one of Saturn's moons to land on and investigate.";
      break;
    case 2:
      gameText.textContent =
        "Grumpy was cautious about the dangers of space but considered a distant nebula a safer choice. 'Let's go to that nebula,' he suggested reluctantly. The spaceship smoothly transitioned into warp speed, and they found themselves surrounded by swirling colors and mesmerizing cosmic clouds within the nebula. It was a breathtaking sight.'You're inside the nebula. What's your next move?'";
      choiceButton1.textContent =
        "Investigate the nebula's unique properties: Analyze the nebula's composition and gather data.";
      choiceButton2.textContent =
        "Spot a mysterious celestial object: Focus your attention on a peculiar formation within the nebula.";
      break;
    case 3:
      gameText.textContent = "generic text1'";
      choiceButton1.textContent = "generic choice 1.";
      choiceButton2.textContent = "generic choice 2.";
      break;
  }
}

// Attach functions to the choice buttons
choiceButton1.addEventListener("click", function () {
  if (gameState === 0) gameState = 1;
  else if (gameState === 1) gameState = 3;
  else if (gameState === 2) gameState = 5;
  startGame();
});

choiceButton2.addEventListener("click", function () {
  if (gameState === 0) gameState = 2;
  else if (gameState === 1) gameState = 4;
  else if (gameState === 2) gameState = 6;
  startGame();
});

startGame();
