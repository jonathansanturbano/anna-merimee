const introOpacity = () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    const anna = hero.querySelector("h1");
    const entrance = hero.querySelector("p");
    setTimeout(() => {
      anna.style.opacity = 1;
      anna.style.transform = "translateX(0)";
    }, 500);
    setTimeout(() => {
      entrance.style.opacity = 1;
    }, 2000);
  }
};

export { introOpacity };
