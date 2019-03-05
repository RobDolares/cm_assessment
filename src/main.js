const toggleMenu = () => {
  const x = document.getElementById("topNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
};


// window.onload = () => {
//   let cards = document.querySelectorAll(".card");
//   let cardArray = Array.from(cards).forEach(card => card.addEventListener('mouseover', (e)=>{
//       document.querySelectorAll(".icon-container").innerHTML = 'test';
//     }))
//
//     Array.from(cards).forEach(card=>card.addEventListener('mouseoff',(e)=>{
//       e.target.classList.remove('card-inverse');
//     }))
// };
