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
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 5:
      //Reverse the sands of time - SEARCH FOR A NEARBY VILLAGE
      gameText.innerHTML = `<p>With a sense of trepidation and the hope of finding friendly faces, you decide to seek shelter in the nearby village. The villagers, though poor and humble, offer you tentative smiles and even a child shares a piece of bread. Your hunger quelled, you wander through the village, and destiny leads you to a small cottage where an elderly woman greets you with open arms.</p>
        <p>Over time, you come to call this cottage your home. The village and its simple way of life become a part of you, and you find contentment in the quietude. The once-vibrant beauty of Snow White fades, but it is replaced by the wisdom and strength that life in the village bestows upon you.</p>
        <p>As you immerse yourself in this new life, the malevolent Queen's obsession with you wanes, and she eventually forgets about the threat you once posed.</p>
        <p>Years pass, and you marry a kind soul from the village, raise children, and watch them grow. The village becomes a close-knit family, and you live a fulfilling life far removed from the grandeur of the castle.</p>
        <p>As your life reaches its twilight, you recall that fateful day when you ran away from the dwarfs' cottage and made the choice to seek shelter in the village. A single thought lingers in your mind: "What if?"</p>
        <p>In this quiet and forgotten village, you find your own version of happily ever after, content with the choices you made and the life you lived. The world outside may have forgotten your story, but within the walls of this tiny village, your legacy endures, a testament to the power of choices in the tapestry of time.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 6:
      //Case 2 choice - See if the Dwarfs are friendly
      gameText.innerHTML = `<p>In the cozy cottage, your days pass harmoniously with the seven dwarfs. Despite initial fears, you discover their warmth and kindness, even Grumpy's, who softens in your presence. You offer your culinary and housekeeping skills in exchange for shelter, and a unique bond forms. They become your family in this quaint and hidden corner of the forest.</p>

    <p>However, unbeknownst to you, the malevolent Queen, through her magic mirror, discovers that you are alive. Her wicked plans to eliminate you once and for all are set in motion.</p>
    <p>In response to the looming threat, the dwarfs caution you not to open the door to anyone other than them when they leave for the day. Their warning echoes in your mind.</p>
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
      choiceButton1.textContent = "Restart";
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
      choiceButton1.textContent = "Restart";
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
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 11:
      //case 01- Continue on your journey thread
      gameText.innerHTML = `<p>With trepidation, you choose to ignore the mysterious cottage in the heart of the enchanted forest, driven by fear of the unknown. After all, who could possibly reside in such an isolated place but monsters?</p>
      <p>You continue your journey, your hope dwindling with each step as you search for another shelter. However, the vastness of the forest is unforgiving, and you find no refuge or companions along your path.</p>
      <p>Days turn into a seemingly endless journey, and the harsh realities of the forest take their toll. Hunger and thirst consume you, weakening your resolve.</p>
      <p>Finally, you succumb to your bodily needs, unable to carry on. As you lie in the heart of the enchanted forest, your strength waning, your journey comes to an untimely and tragic end.</p>
      <p>In this somber conclusion, the tale of "Snow White's Time Warp Adventure" ends with the harshness of nature, leaving behind a world filled with unanswered questions and unfulfilled destiny.</p>`;
      choiceButton1.textContent = "Restart";
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
      break;
    case 13:
      //Chooses to Directly challenge the queen
      gameText.innerHTML = `<p>Your resolve to confront the Malevolent Queen in front of the entire court is unwavering, despite the wisdom in the Huntsman's advice. The threat posed by the magic mirror's relentless surveillance is a constant concern, and you believe that a direct approach is your best chance.</p>
      <p>However, as the confrontation unfolds before the court, you face an unexpected twist. The Queen, with her cunning words and a spell on your father, manages to turn the entire court against you. Despite your heartfelt pleas and the Huntsman's testimony, your father, under the Queen's spell, condemns you to the dungeon, while the Huntsman is sentenced to death.</p>
      <p>Days turn into a cold, regret-filled existence in the dungeon, where you are tormented by the weight of your circumstances. However, a glimmer of hope appears in the form of a soldier who offers you a chance to escape.</p>
      <p>In the damp and dark confines of the dungeon, your hope had nearly dwindled to nothing. Yet, the soldier's unexpected offer presents you with a dilemma that could determine your fate.</p>
      <ol>
      <li>Option 1: The soldier's offer may be your only chance at freedom, a means to escape the Queen's clutches. However, you know that accepting this offer might mean losing your only chance to prove your innocence and convince your father of the truth.</li>
      <li>Despite the allure of escape, you decide to stay in the dungeon, believing that biding your time may lead to another opportunity to clear your name. You fear that this offer might be a sinister ploy by the Queen.</li>
      </ol>`;
      choiceButton1.textContent = " Accept the soldier's offer";
      choiceButton2.textContent = "Decline the offer";
      break;
    case 14:
      //Accept the soldier's offer
      gameText.innerHTML = `<p>Taking a considerable risk, you choose to accept the soldier's offer of escape, driven by the fear that another chance at freedom might not come your way. True to his word, the soldier arrives at midnight and whisks you away from the dungeon, leading you to the depths of the enchanted forest.</p>
      <p>There, he brings you to a small cottage and claims that seven dwarfs residing there can assist you in your quest to defeat the Malevolent Queen. However, the quaint surroundings and the uncertainty of this new place leave you feeling apprehensive. You worry about being stuck in this remote cottage, far from your home and your mission to clear your name.</p>
      <p>The cottage in the enchanted forest feels both welcoming and mysterious. As you stand at this crossroads, a sense of uncertainty weighs on your mind.</p>
      <ol>
      <li>Option 1: You can choose to trust the soldier's word and seek the help of the seven dwarfs. They may hold the key to your success, and their humble cottage could become a stronghold against the Malevolent Queen. But can you truly rely on them?</li>
      <li>Option 2: Alternatively, you can try to convince the soldier to take you to a nearby village. There, you may have a chance to gather allies and resources to bolster your cause. However, this option carries its own set of risks.</li>
      </ol>`;
      choiceButton1.textContent = "Seek help from the dwarfs";
      choiceButton2.textContent = "Request to visit a nearby village";
      break;
    case 15:
      //Seek help from the dwarfs
      gameText.innerHTML = `<p>You decide to place your trust in the soldier who has brought you this far and follow him into the cottage nestled deep within the enchanted forest. Inside, you're met by seven dwarfs, each with their distinct personalities, but it becomes apparent that Grumpy is the true leader among them.</p>
      <p>Despite Grumpy's gruff exterior, you sense a willingness in the dwarfs to aid your cause. What surprises you even more is their possession of magical abilities that could prove invaluable in thwarting the Malevolent Queen's plans. They express their willingness to assist you, but their demand is unexpected - they ask for rule over the enchanted forest as their reward.</p>
      <p>The dwarfs' proposal hangs in the air, a weighty decision on your shoulders.</p>
      <ol>
      <li>Option 1: You decide to accept the dwarfs' condition, believing that their magical abilities and support are crucial in your quest to confront the Malevolent Queen. However, you worry about how your subjects might react to this decision in the future.</li>
      <li>Option 2:The cost of granting the enchanted forest to the dwarfs seems too high a price to pay, and you choose to seek help elsewhere. You'll explore other avenues for allies and resources to take on the Queen.
      </li>
      </ol>`;
      choiceButton1.textContent = " Accept the Dwarfs' Condition";
      choiceButton2.textContent = " Seek Help Elsewhere";
      break;
    case 16:
      //You decide to accept the Dwarf's condition.
      gameText.innerHTML = `<p>Despite your initial misgivings about the dwarfs' demand for control over the enchanted forest, you choose to accept their offer, driven by the urgency of your mission to defeat the Malevolent Queen. In return for their assistance, the dwarfs gift you a special artifact capable of breaking the Queen's enchantments.</p>
      <p>With the aid of the soldier and his allies, you execute a daring plan to infiltrate the palace, utilizing secret passages to reach your father, who has been ensnared by the Queen's enchantments. Successful in your endeavor, your father is freed, and he comes to recognize the depth of the Queen's malevolence.</p>
      <p>In a decisive turn of events, your father orders the arrest of the Malevolent Queen and the destruction of the mirror, the source of her dark power. With the Queen's defeat, your kingdom is saved.</p>
      <p>However, the price of your victory is steep. To honor your agreement with the dwarfs, your father grants them rule over the enchanted forest. While this decision secures your kingdom's future, it proves to be deeply unpopular among your subjects. As a result, both you and your father are forced to give up your thrones and live in exile in the nearest kingdom.</p>
      <p>The bittersweet taste of victory lingers as you and your father begin anew in the quiet village, far from the trappings of royalty.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 17:
      //case 15 - Seek Help elsewhere from the dwarfs
      gameText.innerHTML = `<p>the dwarfs offer of assistance was both a lifeline and a dilemma. Their unique magical abilities could aid you in vanquishing the Malevolent Queen, but the price they demanded, control over the enchanted forest, weighed heavily on your heart.</p>
      <p>With gratitude, you declined their offer and turned to a loyal soldier for counsel. Moved by pity, the dwarfs proposed a daring plan: journey to a neighboring kingdom where a young prince sought a bride. Marrying him might secure the support needed to confront the Queen.</p>
      <p>Weeks of travel left you hungry, weary, and desperate, but finally, you reached the neighboring kingdom. Fate took an unexpected turn when the prince, entranced by your beauty, fell in love. Your words convinced him of your royal lineage, and he pledged his unwavering support.</p>
      <p>With the prince by your side, you returned to your kingdom, ready to confront the Malevolent Queen. Fierce battles ensued, and her enchantments resisted, but love and determination carried you through. As her reign crumbled, your father was freed from his enchantment, and your joyful reunion warmed your hearts.</p>
      <p>Together, you toiled to rebuild your kingdom, crafting a brighter future from the ashes of the past. The realm welcomed you back with open arms, grateful for your bravery and the defeat of the evil that had plagued your land.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 18:
      //Choice 13: Decline the offer made by the soldier
      gameText.innerHTML = `<p>In the face of the soldier's offer, you held firm to your conviction, believing that accepting his help might be a hidden ploy of the Malevolent Queen, one that could ultimately spell your doom. Deep down, you also clung to the hope that your father, despite the Queen's enchantment, would ensure you received a fair trial.</p>
      <p>Regrettably, the soldier, disappointed by your refusal, departed, and you never received such an offer again. Your fate was sealed, and you spent your days in the dungeon, forgotten by the world, as the Malevolent Queen's influence gradually erased you from your father's memory and the kingdom's collective consciousness.</p>
      <p>Years turned into decades, and in your old age, a new king, unaware of your true identity, took pity on the wretched prisoner in the dungeon. He ordered your release, an act of kindness that left you broken, unable even to articulate your past.</p>
      <p>Cast adrift, you wandered into the enchanted forest, where fate once again intervened. In the heart of the woods, you stumbled upon a quaint cottage inhabited by seven dwarfs. Moved by your plight, they invited you to stay, offering you the simple comforts of their humble abode.</p>
      <p>In the twilight of your life, you found solace and companionship among the dwarfs, sharing in their daily routines and the warmth of their company. Yet, as your days drew to a close, your thoughts often drifted to the soldier, pondering how your destiny might have unfolded had you chosen to escape with him.</p>
      <p>Your story became one of bittersweet reflection, a tapestry woven with the threads of choices made and the haunting specter of what might have been.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 19:
      //Case 14 - Request to Visit a Nearby Village
      gameText.innerHTML = `<p>Despite the soldier's insistence that the dwarfs could be of assistance, your confidence wavered. How could they, living secluded in the heart of the forest, offer meaningful aid? With your conviction firm, you persuaded the soldier to take you to a nearby village, where you hoped to gather allies.</p>
      <p>Reluctantly, the soldier obeyed your wishes and guided you to the village of his childhood. There, he placed you in the care of one of his friends, promising to return with additional help. He left you with hope in your heart and assurances from his friend that you would be protected.</p>
      <p>Days turned into weeks, and yet the soldier did not return. You were left in a world of uncertainty, never learning of his fate. Despite the efforts of his friend, your attempts to recruit allies in the village proved fruitless. Fear of the Malevolent Queen's reprisal held the villagers in check, and they dared not aid a seemingly insignificant princess.</p>
      <p>In this village, you toiled tirelessly, working from dawn to dusk, fading into the background as time passed. Eventually, even the Malevolent Queen's attention waned, and she forgot about your existence entirely.</p>
      <p>Life took an unexpected turn when you met a traveling merchant, and love blossomed between you. You embarked on journeys to distant lands with your husband, leaving behind the trials of the past and embracing a life filled with love and adventure.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 20:
      //Case 12 - Hide in plain sight
      gameText.innerHTML = `<p>In the shadows of the castle, disguised as a servant, you found wisdom in the Huntsman's advice to hide in plain sight and gather allies discreetly. Your fear of the Malevolent Queen's magic mirror was well-founded, but the Huntsman offered you a glimmer of hope in the form of a trinket, a relic from his friends in the enchanted forest who were masters of magic.</p>
      <p>With the enchanted trinket in your possession and the Huntsman as your steadfast ally, you successfully concealed yourself from the Queen's ever-watchful gaze. In the guise of a servant, you navigated the castle's intricate corridors, gathering information and waiting for the right opportunity to strike.</p>
      <p>Then, one fateful day, an unexpected chance presented itself. You found yourself in the Malevolent Queen's private chambers, where a silk cloth concealed a mysterious object. As you unveiled it, you came face to face with the magic mirror itself. To your astonishment, the mirror spoke to you, claiming to be a powerful sorcerer trapped by the Queen's malevolent magic. It sought your help for liberation and pledged to aid you in defeating the Malevolent Queen in return. The offer hung in the air, tempting and uncertain.</p>
      <ol>
      <li>Option 1: You decide to trust the mirror's words, believing that a common enemy might make for a powerful ally. You promise to free the sorcerer and forge an alliance to defeat the Malevolent Queen.</li>
      <li>Option 2: Despite the mirror's pleas, you remain skeptical. The Queen's dark magic runs deep, and trusting the very object she used might be a grave mistake. You choose to continue your quest for allies through more conventional means.</li>
      </ol>`;
      choiceButton1.textContent = "Trust the Mirror";
      choiceButton2.textContent = "Distrust the Mirror";
      break;
    case 21:
      //You decide to trust the mirror
      gameText.innerHTML = `<p>Your decision to trust the mirror, despite your initial misgivings, led you down a treacherous path. You believed that using the very source of the Queen's power against her was a brilliant strategy. The mirror, delighted with your answer, revealed a dark secret: the Queen's power came from feeding her own blood to the mirror, and you could gain the same power by doing so. However, the mirror issued a grave warning, cautioning you about the addictive allure of the magic. You had to willingly give up your newfound power once the Queen was defeated in order to free the sorcerer trapped within.</p>
      <p>Driven by your eagerness to defeat the Malevolent Queen and reclaim your kingdom, you fed the mirror a drop of your blood. Instantly, you were filled with an overwhelming rush of magic. With your newfound power, you effortlessly defeated the Queen, who had lost her connection to the mirror's magic.</p>
      <p>But the mirror's warning about the addictive nature of the magic proved true. When the time came for you to relinquish your power, you found yourself unable to do so. Desperate to keep your power, you hastily promised the mirror that you would only retain it for one year, just long enough to repair the damage done by the evil Queen.</p>
      <p>However, the mirror, with its ancient wisdom, knew it was already too late. As the year passed, you walked a dark and perilous path, succumbing to the seductive allure of beauty and power. With your father's passing, you ascended to the throne as a powerful and feared queen. People from far and wide admired your unmatched beauty and potent magic. But over time, your heart grew as cold and cruel as the evil you had once sought to destroy.</p>
      <p>The cycle continued, and you became the very embodiment of the Malevolent Queen you had vanquished, a ruler whose heart was consumed by darkness and whose thirst for power was unquenchable.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 22:
      //You choose to distrust the mirror
      gameText.innerHTML = `<p>Remaining skeptical of the mirror's pleas, you held onto your doubts. How could you trust the very source of the Malevolent Queen's power? The knowledge that the mirror had seen through your protection, revealing your true identity, only deepened your suspicion.</p>
      <p>In an act of desperation, you resolved to steal the mirror, as destroying it by conventional means had proven futile. With the assistance of your loyal servants, you executed a daring plan, sneaking the mirror through a labyrinth of secret tunnels, concealed from the Queen's prying eyes. Hoping that she wouldn't immediately discover its disappearance, you sought the counsel of the huntsman to devise a way to obliterate this malevolent artifact.</p>
      <p>The huntsman, however, grew increasingly concerned for your safety upon discovering the mirror's existence. He offered to take it off your hands, intending to deliver it into the care of his friends in the enchanted forest, who possessed the knowledge to safely destroy it.</p>
      <p>Reluctant to entrust such a dangerous object to the huntsman, you proposed an alternative plan. Keep the mirror hidden within a long-forgotten, remote part of the castle, effectively severing the Malevolent Queen from her source of power. This way, you reasoned, you might weaken her grip on the kingdom without risking the mirror falling into even more perilous hands.</p>
      <p>The choice you make now will determine the fate of the mirror and your quest to dethrone the Malevolent Queen.</p>
      <ol>
      <li>Option 1: Trusting the huntsman's intentions, you decide to give him the mirror. He will transport it to the enchanted forest for safe destruction.</li>
      <li>Option 2: Reluctant to part with such a dangerous object, you choose to conceal the mirror within the castle, hoping it will weaken the Malevolent Queen's power.</li>
      </ol>`;
      choiceButton1.textContent = "Hand over the mirror to the huntsman";
      choiceButton2.textContent = "Keep the mirror hidden";
      break;
    case 23:
      //Hand over the mirror to the huntsman
      gameText.innerHTML = `<p>Trusting in the huntsman's integrity, you handed over the malevolent mirror to him, allowing him to depart with a promise to see it destroyed. As he disappeared into the enchanted forest with the cursed object, hope bloomed in your heart.</p>
      <p>However, the Malevolent Queen soon discovered the mirror's loss, and madness consumed her. She relentlessly sought it, resorting to tormenting and questioning her servants, sparing no one she found suspicious. Fear gripped the castle as her desperation grew.</p>
      <p>In your darkest moments, it seemed as tho   ugh even your most loyal servants might betray you to save themselves from her wrath. The specter of doom loomed ever nearer, threatening to engulf you.</p>
      <p>But then, when all hope seemed lost, the huntsman returned. With a triumphant air, he claimed that the mirror had met its demise. Skepticism gnawed at your thoughts, but it didn't take long for reality to sink in U+2013 the Malevolent Queen's power had indeed waned.</p>
      <p>Your father, who had languished under her enchantment for so long, awoke to the horrifying reality of the Queen's monstrous deeds. She was swiftly apprehended, tried, and sentenced to death for her unspeakable crimes. In the wake of her demise, your father welcomed you back with open arms, reuniting a family torn asunder by dark enchantments.</p>
      <p>The kingdom, at long last, found peace, and you, Snow White, had triumphed over the darkest of sorcery to reclaim your rightful place by your father's side.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
    case 24:
      //You decide to keep the mirror hidden
      gameText.innerHTML = `<p>While you trusted the huntsman, your fear of the mirror's malevolence prevailed, and you convinced him to seal it away in the deepest depths of the secret tunnels within the castle. Though the huntsman harbored doubts and believed the mirror should be destroyed, he ultimately obeyed your wishes.</p>
      <p>The Malevolent Queen's reaction to her missing mirror was nothing short of madness. She launched a frantic, all-encompassing search, terrorizing the castle in her desperation. Fearing for your life, the huntsman guided you to the enchanted forest, where he introduced you to the seven dwarfs residing in a quaint cottage nestled in the heart of the woods. He assured you that he would return once you were safe.</p>
      <p>In the company of the dwarfs, you found solace and a sense of belonging. Months turned into a peaceful existence, but as time passed, doubt gnawed at your heart. The huntsman's absence grew long, and you began to fear that he had abandoned you in this remote refuge.</p>
      <p>However, just as all hope seemed lost, the huntsman returned in triumph. He revealed that the Malevolent Queen's power had waned, and your father had been liberated from her sinister enchantment. Justice was swiftly served, and the Queen met her demise for the countless crimes she had committed.</p>
      <p>Relieved and overjoyed, you bid farewell to the dwarfs who had become dear friends and family during your time in the enchanted forest. Reunited with your father, you returned home, where all seemed well.</p>
      <p>Years passed, and you were wed to the huntsman, who had risen to greatness due to his valor during the Malevolent Queen's reign. Together, you ascended to the throne after your father's passing and ushered in a time of peace. The evil mirror became a distant memory, hidden deep within the castle's tunnels, forgotten by all.</p>
      <p>However, unbeknownst to you, one of your adventurous daughters, enamored with her own beauty, developed an obsession with exploring the castle's hidden corners, a curiosity that could potentially unearth forgotten secrets.</p>`;
      choiceButton1.textContent = "Restart";
      choiceButton2.textContent = "Exit the game";
      break;
  }
}
// Add event listeners for the choice buttons
choiceButton1.addEventListener("click", function () {
  if (
    gameState === 16 ||
    gameState === 17 ||
    gameState === 18 ||
    gameState === 19 ||
    gameState === 21 ||
    gameState === 23 ||
    gameState === 24 ||
    gameState === 9 ||
    gameState === 7 ||
    gameState === 4 ||
    gameState === 5 ||
    gameState === 10 ||
    gameState === 11
  ) {
    // restart state
    gameState = 0;
  } else if (gameState === 0) {
    gameState = 1;
  } else if (gameState === 1) {
    gameState = 2;
  } else if (gameState === 2) {
    gameState = 3;
  } else if (gameState === 3) {
    gameState = 4;
  } else if (gameState === 6) {
    gameState = 7;
  } else if (gameState === 8) {
    gameState = 9;
  } else if (gameState === 12) {
    gameState = 13;
  } else if (gameState === 13) {
    gameState = 14;
  } else if (gameState === 14) {
    gameState = 15;
  } else if (gameState === 15) {
    gameState = 16;
  } else if (gameState === 20) {
    gameState = 21;
  } else if (gameState === 22) {
    gameState = 23;
  }
  startGame();
});

choiceButton2.addEventListener("click", function () {
  // Define an array of game over states
  const gameOverStates = [16, 17, 18, 19, 21, 23, 24, 9, 7, 4, 5, 10, 11];

  if (gameOverStates.includes(gameState)) {
    // Game Over state
    gameText.innerHTML = "<p>Game Over</p>";
    choiceButton1.style.display = "none";
    choiceButton2.style.display = "none";
    // Show the reset button
    resetButton.style.display = "block";
  } else {
    // Handle other transitions
    if (gameState === 0) {
      gameState = 12;
    } else if (gameState === 1) {
      gameState = 11;
    } else if (gameState === 2) {
      gameState = 6;
    } else if (gameState === 3) {
      gameState = 5;
    } else if (gameState === 6) {
      gameState = 8;
    } else if (gameState === 8) {
      gameState = 10;
    } else if (gameState === 12) {
      gameState = 20;
    } else if (gameState === 13) {
      gameState = 18;
    } else if (gameState === 14) {
      gameState = 19;
    } else if (gameState === 15) {
      gameState = 17;
    } else if (gameState === 20) {
      gameState = 22;
    } else if (gameState === 22) {
      gameState = 24;
    }
    startGame();
  }
});
resetButton.addEventListener("click", function () {
  // Reset the game to its initial state (gameState = 0)
  gameState = 0;

  // Show both choice buttons again
  choiceButton1.style.display = "block";
  choiceButton2.style.display = "block";

  // Hide the reset button
  resetButton.style.display = "none";

  // Reset the game text to its initial state
  startGame();
});
startGame();
