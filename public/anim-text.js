const titre = document.querySelector("#titre");
const sousTitre = document.querySelector("#sous-titre");
const btnHeader = document.querySelector("#btn-header");

const TL1 = new TimelineMax({ paused: true });

TL1.from(titre, 1, { y: -100, opacity: 0 })
  .from(
    sousTitre,
    1,
    {
      opacity: 0,
    },
    "-=0.4"
  )
  .from(
    btnHeader,
    1,
    {
      x: -100,
      opacity: 0,
    },
    "-=0.5"
  );
TL1.play();
