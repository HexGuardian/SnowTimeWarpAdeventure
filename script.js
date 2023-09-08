// JavaScript code to handle the game
let gameText = document.getElementById("gameText");
let choiceButton1 = document.getElementById("choiceButton1");
let choiceButton2 = document.getElementById("choiceButton2");

//initiate game state
let gameState = 0;

function startGame() {
  // Function to update the game based on player choices
  switch (gameState) {
    //Introduction and initial decision
    case 0:
      gameText.innerHTML = `<p>As you slip into Snow White's shoes, you find yourself standing before the menacing Queen's palace, the first chapter of your timeless journey. The jealous Queen's wicked intentions are clear: she has ordered her loyal huntsman to end your life.
      <p> <p>In a twist of fate, the huntsman, struck by a sudden surge of compassion, decides to reveal the Queen's sinister plot to you. You now face a crucial choice:<p> 
      <ol> 
      <li>Option 1: Escape to the Enchanted Forest: Embrace your newfound knowledge and flee into the mystical depths of the Enchanted Forest, seeking refuge amidst its towering trees and whimsical creatures. Here, you'll begin your quest to unravel the secrets of the fairytale world.</li>
      <li>Option 2: Confront the Malevolent Queen: Confront the Queen head-on, challenging her wickedness and demanding answers. But be warned, the path to confronting the Queen is fraught with danger and intrigue.</li>
      </ol>`;

      choiceButton1.textContent = "Escape to the Enchanted Forest:";
      choiceButton2.textContent = "Confront the Malevolent Queen";
      break;

    case 1:
      //Snow White escapes to the enchanted forest
      gameText.innerHTML = `<p>With wisdom guiding your actions, you decide to avoid a direct confrontation with the malevolent Queen. Instead, you quietly slip away from the castle and into the depths of the Enchanted Forest.</p>
      <p>As you meander through the ancient woods, the eerie calm is broken by a sudden rustling. Your heart races as you peer through the trees and discover a quaint cottage nestled among the foliage.</p>
      <p>Now, you face a pivotal crossroads:</p>
      <ol>
      <li>Option 1: Enter the Mysterious Cottage: Curiosity gets the better of you, and you cautiously approach the cottage's welcoming, yet enigmatic, door. Who resides within, and will they offer you shelter and guidance?</li>
      <li>Option 2: Continue Your Journey: The forest stretches endlessly before you, concealing its secrets. You could choose to brave the wilderness, seeking answers elsewhere. But be mindful, the woods hold their own perils, and safety may not be guaranteed.</li>
      </ol>`;
      choiceButton1.textContent = "Enter the Mysterious Cottage";
      choiceButton2.textContent = "Continue Your Journey.";
      break;
    case 2:
      //Enter the mysterious cottage.
      gameText.innerHTML = `<p>Overwhelmed by hunger and exhaustion, you decide to take a chance and enter the mysterious cottage. To your astonishment, the door opens with a gentle creak, revealing a cozy interior bathed in warm, welcoming light.</p>
      <p>Your senses are immediately tantalized by the aroma of hot food simmering on the stove. Without hesitation, you enjoy a much-needed meal and, overcome by weariness, push three of the uniquely small beds together for a nap.</p>
      <p>As you awaken from your slumber, you are greeted by a surprising sight: seven dwarfs, each with distinct personalities, gazing at you with curiosity and concern.</p>
      <p>Now, you find yourself at a crucial juncture:</p>
      <ol>
      <li>Option 1: Return to the Enchanted Forest: You could slip away unnoticed, leaving the cottage and the dwarfs behind, and continue your journey through the forest. The woods hold mysteries of their own, and your destiny remains your own.</li>
      <li>Option 2: See If the Dwarfs Are Friendly: Perhaps the dwarfs can offer assistance, guidance, or even companionship. You could choose to stay and interact with them, forging new alliances and deepening your connection to this enchanting world.</li>
      </ol>`;
      choiceButton1.textContent = "Return to the Enchanted Forest";
      choiceButton2.textContent = "See If the Dwarfs Are Friendly";
      break;
    case 3:
      //Return to the Enchanted Forest after meeting the dwarfs
      gameText.innerHTML = `<p>With a sense of unease at the peculiar dwarfs' presence, you quietly slip away from the cottage and venture back into the Enchanted Forest, determined to take your chances in its depths.</p>
      <p>Hours pass as you wander through the enchanting wilderness, hoping to stumble upon another refuge. But despite your best efforts, you find yourself returning to the very spot where you initially entered the enchanted forest.</p>
      <p>Now, at this crucial crossroads:</p>
      <ol>
      <li>Option 1: Return to the Castle: You can decide to brave the treacherous path back to the castle, facing the malevolent Queen's potential wrath. Perhaps your knowledge of the Queen's intentions will help you navigate her treacherous world.</li>
      <li>Option 2: Search for a Nearby Village: Instead of risking a return to the castle, you choose to seek out the company of friendly villagers who might provide assistance and refuge. It's a leap of faith, but you hope to find kindness and safety beyond the forest's mysterious veil.</li>
      </ol>`;
      choiceButton1.textContent = "Return to the Castle";
      choiceButton2.textContent = "Search for a Nearby Village";
      break;
    case 4:
      //Return to the castle
      gameText.innerHTML = `<p>With doubts about your safety in the Enchanted Forest and a sense of responsibility toward your royal heritage, you decide to return to the castle. After all, you reason, as a princess, there may still be loyal supporters within the castle walls. You acknowledge that running away might not have been the wisest choice.</p>
      <p>As you cautiously make your way back to the castle, your heart heavy with uncertainty, little do you know that the malevolent Queen had anticipated your potential return. She had taken measures to ensure your fate remained sealed.</p>
      <p>Tragically, your journey takes a dark turn as you encounter an assassin, a heartless agent of the Queen's malevolence. This remorseless killer strikes without hesitation, ending your life on your way to the castle.</p>
      <p>Your adventure in the world of Snow White comes to an untimely and tragic end. But fear not, for your journey through time may still hold surprises, and new adventures may await you in different tales and timelines.</p>
      </p>Will you choose to rewind the sands of time and try another path, or will you embark on a new journey altogether? The adventure is yours to shape.</p>`;
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
