const kits = ["snare", "kick", "crash", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");

  btnEl.innerText = kit.slice(0,1);

  btnEl.classList.add("btn");

  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";

  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");

  audioEl.src = "sounds/" + kit + ".mp3";

  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown",(event)=>{
    if(event.key === kit.slice(0,1)){
        audioEl.play();
        btnEl.style.backgroundColor = "rgb(255, 0, 128)";
        btnEl.style.color= "white";
        setTimeout(()=>{
            btnEl.style.backgroundColor ="white";
            btnEl.style.color="rgb(255, 0, 128)";
        },100)
    };
  })
});
