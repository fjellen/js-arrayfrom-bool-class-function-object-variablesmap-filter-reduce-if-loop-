const button = document.getElementById("button");
const artistInput = document.getElementById("artist");
const songTitleInput = document.getElementById("songTitle");
const div = document.getElementById("content");

function createCard(text) {
  const card = document.createElement("div");
  card.className += "card";
  card.innerText = text;
  return card;
}


button.addEventListener("click", async function(event){
  const artist = artistInput.value;
  const songTitle = songTitleInput.value;

  const response = await fetch(`http://ianertson.com:3500/${artist}/${songTitle}`);
  const data = await response.json();

  const firstValue = data[0];

  const lyrics = firstValue.lyrics;

  const card = createCard(lyrics);

  div.innerHTML = "";
  div.appendChild(card);
});