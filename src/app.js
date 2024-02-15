import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excusa() {
  let who = ["My grandma", "His turtle", "My bird"];
  let action = ["peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["right on time", "when I finished", "during my lunch"];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Construct the excuse dynamically, ensuring valid grammar
  let excuse = `Oh no! ${randomWho} ${randomAction} ${randomWhat} ${randomWhen}. I'm so sorry, I can't make it to class.`;

  // Output the excuse in both the console and on the page
  console.log(excuse);
  document.write(excuse); // Write to the HTML as requested
};
