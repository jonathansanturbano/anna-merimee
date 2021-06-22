const introOpacity = () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    setTimeout(() => {
      hero.style.filter = "grayscale(0)";
    }, 0);
    const anna = hero.querySelector("h1");
    const entrance = hero.querySelector("p");
    setTimeout(() => {
      anna.style.opacity = 1;
    }, 0);
    setTimeout(() => {
      entrance.style.opacity = 1;
    }, 0);
  }
};

export { introOpacity };
