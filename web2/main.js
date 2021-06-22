const URL = "https://cat-fact.herokuapp.com/facts";

const button = document.getElementById("button");
const searchInput = document.getElementById("searchInput");
const ul = document.getElementById("ul");

const myFilter = (el, searchValue) => el.text.toLowerCase().includes(searchValue.toLowerCase())


function createLi(text) {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
}

button.addEventListener("click", async function(event){
  const response = await fetch(URL);
  const arr = await response.json();
  const searchValue = searchInput.value;


  if (searchValue.length >= 2) {
    ul.innerHTML = "";
    const results = arr.filter(catObject => myFilter(catObject, searchValue));

    if (results.length) {
        results.forEach(function(catObject){
            const li = createLi(catObject.text);
            ul.appendChild(li);
        });
    } else {
      ul.innerHTML = "Sorry no results!";
    }
  }
});