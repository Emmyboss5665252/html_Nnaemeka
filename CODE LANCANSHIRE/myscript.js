window.addEventListener('load', ()=>{

    const skills = ["HTML5", "JavaScript", "CSS 3", "Python", "FastAPI", "SQL","Vue 3"]
    let ul = document.querySelector("#list")
    skills.forEach(skills => {
        // function code
        let li = document.createElement("li")
        li.innerHTML = skills
        ul.appendChild(li)
    })

    let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  " Total Number of bones in human body = 206.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow to see more or refresh the page!";
  button.style.cursor = "default";

  
button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);

/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
})