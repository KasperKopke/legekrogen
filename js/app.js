function burgerMenu() {
  document.querySelector("nav").classList.toggle("actives");
}

const sildeData = [
  {
    soruce: "./assets/heros/forsiden2.jpg",
    alt: "Billede 1",
  },
  {
    soruce: "./assets/children-playing.jpg",
    alt: "Billede 1",
  },
  {
    soruce: "./assets/born.jpg",
    alt: "Billede 1",
  },
];

const slideContainer = document.querySelector(".slides");

sildeData.forEach((slide) => {
  slideContainer.innerHTML += `
  <div class="single-slide">
  <img src=" ${slide.soruce}" alt=" ${slide.alt}" />
</div>
  `;
});

const slides = document.querySelectorAll(".single-slide");

let slidesLength = slides.length - 1;
let currentImageIndex = 0;

const setActiveSlide = (index) => {
  slides.forEach((element) => {
    element.classList.remove("active");
  });

  slides[index].classList.add("active");
};

const next = () => {
  currentImageIndex >= slidesLength
    ? (currentImageIndex = 0)
    : (currentImageIndex += 1);

  setActiveSlide(currentImageIndex);
};
setInterval(next, 8000);
setActiveSlide(currentImageIndex);

const toys = [
  {
    soruce: "./assets/products/product1.jpg",
    alt: "Tandlægesæt i træ",
    producent: "Tiny Republic Play",
    rubrik: "Tandlægesæt i træ",
    pris: "849 kr",
  },
  {
    soruce: "./assets/products/product2.jpg",
    alt: "Tandlægesæt i træ",
    producent: "Kids Concept",
    rubrik: "Edvin gåvogn",
    pris: "499 kr",
  },
  {
    soruce: "./assets/products/product3.jpg",
    alt: "Tandlægesæt i træ",
    producent: "Vilac",
    rubrik: "Fire på stribe spil",
    pris: "69,30 kr",
    discountt: "30 %",
  },
  {
    soruce: "./assets/products/product4.jpg",
    alt: "Tandlægesæt i træ",
    producent: "Tiny Republic Play",
    rubrik: "Isbod i træ",
    pris: "259 kr",
  },
];

const toysContainer = document.querySelector(".toys-article");

toys.forEach((toyss) => {
  toysContainer.innerHTML += `
  <article>
  <div class="toys-article-top discount-prod">
    <img src="${toyss.soruce}" alt="${toyss.alt}" />
    ${
      toyss.discountt
        ? `<div class="discount"><h2>${toyss.discountt}</h2></div>`
        : ""
    }
  </div>
  <div class="toys-article-buttom">
    <h3 class="toys-h3">${toyss.producent}</h3>
    <h3>${toyss.rubrik}</h3>
    <p>${toyss.pris}</p>
  </div>
</article>
  `;
});

const udtagelser = [
  {
    text: "Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, da der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest.",
    navn: "- Heidi, mor til Hugo på 3 år",
  },
  {
    text: "Efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars",
    navn: "- Karsten Hansen, Morfar",
  },
  {
    text: "Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert",
    navn: "- Omar, onkel til Anton på 11 år",
  },
];

const udtagelserContainer = document.querySelector(".statements-articles");

udtagelser.forEach((udtagelse) => {
  udtagelserContainer.innerHTML += `
  <article>
  <p>
   ${udtagelse.text}
  </p>

  <h3>${udtagelse.navn}</h3>
</article>
  
  `;
});
