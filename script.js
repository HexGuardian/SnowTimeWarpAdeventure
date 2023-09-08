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
      </p> <p>In a twist of fate, the huntsman, struck by a sudden surge of compassion, decides to reveal the Queen's sinister plot to you. You now face a crucial choice:</p> 
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
      choiceButton2.textContent = "Continue on Your Journey.";
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
      choiceButton1.textContent = "Reverse the sands of time";
      choiceButton2.textContent = "Go back to the beginning";
      break;
    case 5:
      //Reverse the sands of time - SEARCH FOR A NEARBY VILLAGE
      gameText.innerHTML = `<p>With a sense of trepidation and the hope of finding friendly faces, you decide to seek shelter in the nearby village. The villagers, though poor and humble, offer you tentative smiles and even a child shares a piece of bread. Your hunger quelled, you wander through the village, and destiny leads you to a small cottage where an elderly woman greets you with open arms.</p>
        <p>Over time, you come to call this cottage your home. The village and its simple way of life become a part of you, and you find contentment in the quietude. The once-vibrant beauty of Snow White fades, but it is replaced by the wisdom and strength that life in the village bestows upon you.</p>
        <p>As you immerse yourself in this new life, the malevolent Queen's obsession with you wanes, and she eventually forgets about the threat you once posed.</p>
        <p>Years pass, and you marry a kind soul from the village, raise children, and watch them grow. The village becomes a close-knit family, and you live a fulfilling life far removed from the grandeur of the castle.</p>
        <p>As your life reaches its twilight, you recall that fateful day when you ran away from the dwarfs' cottage and made the choice to seek shelter in the village. A single thought lingers in your mind: "What if?"</p>
        <p>In this quiet and forgotten village, you find your own version of happily ever after, content with the choices you made and the life you lived. The world outside may have forgotten your story, but within the walls of this tiny village, your legacy endures, a testament to the power of choices in the tapestry of time.</p>`;
      choiceButton1.textContent = "Go to the very beginning";
      choiceButton2.textContent = "Exit the game";
      break;
    case 6:
      //Case 2 choice - See if the Dwarfs are friendly
      gameText.innerHTML = `<p>In the cozy cottage, your days pass harmoniously with the seven dwarfs. Despite initial fears, you discover their warmth and kindness, even Grumpy's, who softens in your presence. You offer your culinary and housekeeping skills in exchange for shelter, and a unique bond forms. They become your family in this quaint and hidden corner of the forest.</p>

    <p>However, unbeknownst to you, the malevolent Queen, through her magic mirror, discovers that you are alive. Her wicked plans to eliminate you once and for all are set in motion.</p>
    
    <p>In response to the looming threat, the dwarfs caution you not to open the door to anyone other than them when they venture out to cut wood. Their warning echoes in your mind.</p>
    
    <p>One day, while you are alone in the cottage, a soft but persistent knock echoes from the door. In this pivotal moment, you stand before the closed door, torn between your sense of compassion and the dwarfs' stern warning. The memory of the dwarfs' kindness and their status as your newfound family weighs heavily on your heart.</p>

    <p>Yet, the dire threat posed by the malevolent Queen and the dwarfs' unwavering caution echo in your mind. You recall the evil Queen's relentless pursuit, and the knowledge that she will stop at nothing to ensure your demise.</p>
    
    <p>With a deep breath, you make a choice:</p>
    <ol>
    <li>Option 1: Follow the Dwarfs' Warning: You remember the dwarfs' clear instructions and decide not to open the door, choosing to remain cautious and keep yourself safe from potential danger.</li>
    
    <li>Option 2: Open the Door Out of Compassion: Your compassionate nature compels you to open the door, driven by the thought that it could be a lost soul seeking help in the vast and mysterious forest. Despite the risk, your heart guides your actions.</li>
    </ol>`;
      choiceButton1.textContent = "Follow the Dwarfs' Warning";
      choiceButton2.textContent = "Open the Door Out of Compassion";
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
