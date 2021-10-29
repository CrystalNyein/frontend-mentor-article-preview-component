const shareSocial = (e) => {
  let rect = e.target.getBoundingClientRect();
  let top = e.target.offsetTop;
  let left = e.target.offsetLeft;
  const shareContainer = document.querySelector(".share-container");
  const cardSocial = document.querySelector(".card-social");
  const shareActive = document.getElementById("share-icon");
  const card = document.querySelector(".card");
  if (shareContainer.classList.contains("display-none")) {
    e.target.classList.add("share-active");
    cardSocial.classList.add("display-mobile-none");
    shareContainer.classList.remove("display-none");
    shareContainer.style.bottom = rect.top - 93 + "px";
    shareContainer.style.left = rect.left - 10 * 13 - 8 + "px";
    card.classList.add("card-radius");
  } else {
    shareActive.classList.remove("share-active");
    shareContainer.classList.add("display-none");
    cardSocial.classList.remove("display-mobile-none");
    card.classList.remove("card-radius");
  }
};
