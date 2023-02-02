/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    let count = 0;
    generateDomain().forEach(element => {
      count++;
      const el = (sel, par) => (par || document).querySelector(sel);
      const elNew = (tag, prop) =>
        Object.assign(document.createElement(tag), prop);

      // Cache a reference to the wrapper parent Element
      const elParent = el("#domainList");

      elParent.append(elNew("div", { textContent: count + "   " + element }));
    });
  });
};

let result = [];
let generateDomain = () => {
  let pronoun = ["the", "our", "your"];
  let adj = ["secret", "magic", "green", "mystic"];
  let noun = ["garden", "forrest", "ocean", "tree"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        result.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return result;
};
