const shareSocial = (e) => {
  let rect = e.target.getBoundingClientRect();
  let top = e.target.offsetTop;
  let left = e.target.offsetLeft;
  console.log(top, left);
  const shareContainer = document.querySelector(".share-container");
  if (shareContainer.classList.contains("display-none")) {
    e.target.classList.add("share-active");
    shareContainer.classList.remove("display-none");
    shareContainer.style.bottom = rect.top - 93 + "px";
    shareContainer.style.left = rect.left - 10 * 13 - 10 + "px";
  } else {
    e.target.classList.remove("share-active");
    shareContainer.classList.add("display-none");
  }
};
