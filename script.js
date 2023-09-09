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
      choiceButton2.textContent = "Continue on your Journey.";
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
    case 7:
      //You decide to follow the dwarfs warning and ignore the knocking.
      gameText.innerHTML = `<p>With unwavering resolve, you choose to heed the dwarfs' warning, resisting the temptation to open the door despite the mysterious knock. Little do you know that the dwarfs' magical protections have effectively kept the malevolent Queen at bay. She may continue to plot, but she remains unable to harm you.</p>
      <p>However, time passes slowly within the safety of the dwarfs' cottage. Years turn into decades as you remain hidden, shielded from the outside world. The malevolent Queen's relentless quest to end your life persists, but her efforts are in vain due to the dwarfs' powerful magic.</p>
      <p>Finally, the day arrives when the malevolent Queen meets her demise, and her dark reign comes to an end. You are now free to leave the cottage and return to the castle. Yet, as you make your way back to your former home, you are met with a heartbreaking revelation.</p>
      <p>Your father, believing you had perished, had passed the crown to a distant cousin upon his death. The throne you once called your own is no longer yours to claim.</p>
      <p>Faced with this bitter truth, you make a life-altering decision. The castle and its trappings no longer hold the allure they once did. Instead, you choose to return to the Enchanted Forest, where your true family resides—the dwarfs who protected you, nurtured you, and became your enduring companions.</p>
      <p>In the heart of the forest, you find solace, love, and a sense of belonging that the castle could never provide. You live out your days alongside the dwarfs, treasuring the simple and profound bonds of friendship and magic.</p>
      <p>And so, the tale of Snow White, marked by trials and choices, concludes with a bittersweet but contented chapter. The enchanted forest becomes your true home, and in the midst of nature's beauty, you find your own kind of happily ever after.</p>`;
      choiceButton1.textContent = "Go to the very beginning";
      choiceButton2.textContent = "Exit the game";
      break;
    case 8:
      //Open the Door Out of Compassion
      gameText.innerHTML = `<p>You decide to open the door after all; you were once lost in the forest. Outside stands an old lady peddling goods. She claims to be from a nearby village and noticed smoke from the chimney, which led her to the cottage. She explains that she came to sell her wares to the occupants.</p>
      <p>However, a hint of suspicion lingers in your mind. You hesitate, pondering the old woman's intentions. In a bid to win your trust, she reveals her basket filled with the most enticing bright red apples. Your mouth waters at the sight of the juicy fruits, a rare treat you haven't savored since living with the dwarfs.</p>
      <p>Despite your hunger and the alluring aroma of the apples, your wariness prevails. You recall the malevolent Queen's relentless pursuit and her knack for using cunning tactics.</p>
      <p>However, the old woman, sensing your hesitation, boldly takes a massive bite from the juiciest apple in her basket and offers you one. You attempt to protest, explaining that you lack the means to pay for it.</p>
      <p>But the old woman, seemingly kind-hearted, agrees to a simple exchange—an apple in return for a glass of water.</p>
      <p>In this moment of both temptation and caution, you find yourself torn between your longing for the apple's sweetness and the ever-present fear of the malevolent Queen's treachery.</p>
      <ol>
      <li>Option 1:: Accept the Apple: Your craving for the apple's sweetness triumphs, and you accept the woman's offer. Hunger and curiosity compel you to take a bite, savoring the long-lost flavor.</li>
      <li>Option 2: Decline the Apple: Your vigilance prevails, and you politely decline the apple, citing your inability to provide anything in return. Though appreciative of the gesture, you stand firm in your cautious choice.</li>
      </ol>`;
      choiceButton1.textContent = "Accept the Apple";
      choiceButton2.textContent = "Decline the Apple";
      break;
    case 9:
      //If player accepts the apple.
      gameText.innerHTML = `<p>In a moment of hunger and temptation, you succumb to the allure of the apple, accepting it in exchange for a simple glass of water. At first, everything seems normal as you savor the apple's sweet flavor.</p>
      <p>However, as you take your third bite, the old woman's laughter pierces the air, and a sudden dread washes over you. You desperately attempt to discard the apple, realizing you should have heeded the dwarfs' warning.</p>
      <p>As the world around you darkens, you collapse to the ground, expecting the worst. Yet, instead of slipping into death's embrace, you find yourself trapped in a surreal in-between state.</p>
      <p>Unbeknownst to you, the dwarfs, ever watchful and protective, had woven a powerful protection spell around you. It saved you from the sinister effects of the cursed apple, preventing your untimely demise.</p>
      <p>Time passes in this enigmatic realm. What feels like years is, in reality, only three days when you are awakened by a kiss. Before you stands a handsome prince from a nearby kingdom. Love has blossomed in his heart for you, even as you remained in this in-between state.</p>
      <p>He takes you to his kingdom, where a grand marriage ceremony is held, uniting you with the prince. Together, you embark on a journey to reclaim your rightful throne.</p>
      <p>With the prince's support and the might of his kingdom's army, you return to your homeland. There, you confront the malevolent Queen who had plagued your life. With courage, determination, and the love of your prince, you put an end to the Queen's dark reign and free your father from the enchantment that held him captive.Your kingdom is finally free from the Queen's dark influence, and you rule with wisdom and kindness alongside your beloved prince.</p>
      <p>In this surprising twist, your journey takes a remarkable turn, guided by love, protection, and the resilience of the human spirit. Snow White reclaims her kingdom, and a new chapter begins, filled with hope, love, and the promise of a brighter future.</p>`;
      choiceButton1.textContent = "Go to the very beginning";
      choiceButton2.textContent = "Exit the game";
      break;
    case 10:
      //If player declines the apple
      gameState.innerHTML = `<p>With the dwarfs' warning still echoing in your mind, you make the cautious choice to decline the apple, despite your inner longing for its sweetness. The old woman graciously accepts your decision but kindly requests a glass of water.</p>
      <p>Moved by compassion and the memory of your own past struggles, you agree to provide her with the water she seeks. As you turn towards the cottage, intending to fulfill her request, a searing pain suddenly lances through your heart.</p>
      <p>In shock and disbelief, you look down to find blood staining your chest, a dark bloom spreading across your clothing. Dread overtakes you as the realization sets in: the old woman has stabbed you, and the world begins to blur around you as you collapse.</p>
      <p>Hours later, you are discovered by the dwarfs, lifeless on their doorstep. Despite their frantic efforts to save you, it's clear that too much time has passed. You had been dead for hours, the victim of a cruel betrayal.</p>
      <p>With heavy hearts, the dwarfs lay you to rest in the depths of the enchanted forest, a place you had come to call home. The world mourns the loss of Snow White, and a sense of sorrow blankets the land.</p>
      <p>In this unexpected and tragic turn of events, the tale of "Snow White's Time Warp Adventure" takes an unforeseen path. Your choices, shaped by caution and compassion, lead to an outcome filled with sorrow and regret. The enchanting forest now holds your eternal slumber.</p>`;
      choiceButton1.textContent = "Go to the very beginning";
      choiceButton2.textContent = "Exit the game";
      break;
    case 11:
      //case 01- Continue on your journey thread
      gameText.innerHTML = `<p>With trepidation, you choose to ignore the mysterious cottage in the heart of the enchanted forest, driven by fear of the unknown. After all, who could possibly reside in such an isolated place but monsters?</p>
      <p>You continue your journey, your hope dwindling with each step as you search for another shelter. However, the vastness of the forest is unforgiving, and you find no refuge or companions along your path.</p>
      <p>Days turn into a seemingly endless journey, and the harsh realities of the forest take their toll. Hunger and thirst consume you, weakening your resolve.</p>
      <p>Finally, you succumb to your bodily needs, unable to carry on. As you lie in the heart of the enchanted forest, your strength waning, your journey comes to an untimely and tragic end.</p>
      <p>In this somber conclusion, the tale of "Snow White's Time Warp Adventure" ends with the harshness of nature, leaving behind a world filled with unanswered questions and unfulfilled destiny.</p>`;
      choiceButton1.textContent = "Go to the very beginning";
      choiceButton2.textContent = "Exit the game";
      break;
    case 12:
      //Confront the Malevolent Queen
      gameText.innerHTML = `<p>AYour decision to boldly confront the Malevolent Queen is unwavering, but the advice of your trusted ally, the Huntsman, gives you pause. The Huntsman's counsel is laced with wisdom, urging you to consider a more cautious path: hiding in plain sight as a servant, gathering allies, and operating quietly to avoid the Queen's gaze.</p>
      <p>The Queen's power and malevolence are undeniable, and the ever-watchful magic mirror she possesses adds an extra layer of complexity to your predicament. You grapple with the choice before you: a direct approach that asserts your presence or a subtler path that relies on stealth and alliances.</p>
      <ol>
      <li>Option 1:Your heart burns with resolve, and you're tempted to directly challenge the Malevolent Queen. You want to face her head-on, hoping that your determination will prevail against her dark magic.</li>
      <li>Option 2:The Huntsman's plan suggests a more subtle approach. By disguising yourself as a servant, you can work behind the scenes to gather allies and intelligence. It's a patient and strategic path, but it comes with the risk of the Queen's magic mirror discovering your true identity.</li>
      </ol> `;
      choiceButton1.textContent = " Directly challenge the queen";
      choiceButton2.textContent = "Hide in plain sight";
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
