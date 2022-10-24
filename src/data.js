import "./styles.css";

export const Tag = {
  breakfast: "breakfast",
  lunch: "lunch",
  shake: "shake"
};

const Menu = [
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/pancakes-bf.jpeg")}
        alt={"pancakes"}
      />
    ),
    name: "Buttermilk Pancakes",
    price: "$15",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/milkshake-sh.jpeg")}
        alt={"milkshake"}
      />
    ),
    name: "Godzilla Milkshake",
    price: "$15",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    tag: Tag.shake
  },
  {
    image: (
      <img className="imgFood" src={require("/img/egg-lu.jpeg")} alt={"egg"} />
    ),
    name: "Egg Attack",
    price: "$15",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    tag: Tag.lunch
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/bacon-bf.jpeg")}
        alt={"bacon"}
      />
    ),
    name: "Bacon Overflow",
    price: "$15",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/buddy-sh.jpeg")}
        alt={"buddy"}
      />
    ),
    name: "Quarantine Buddy",
    price: "$15",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tag: Tag.shake
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/diner-lu.jpeg")}
        alt={"diner"}
      />
    ),
    name: "Diner Double",
    price: "$15",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    tag: Tag.lunch
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/country-bf.jpeg")}
        alt={"country"}
      />
    ),
    name: "Country Delight",
    price: "$15",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/oreo-sh.jpeg")}
        alt={"oreo"}
      />
    ),
    name: "Oreo Dream",
    price: "$15",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    tag: Tag.shake
  },
  {
    image: (
      <img
        className="imgFood"
        src={require("/img/classic-lu.jpeg")}
        alt={"classic"}
      />
    ),
    name: "American Classic",
    price: "$15",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    tag: Tag.lunch
  }
];

export default Menu;
