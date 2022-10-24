import "./styles.css";
import Menu, { Tag } from "./data";
import { useState } from "react";

export default function App() {
  const [tag, changeTag] = useState(Tag.all);

  const menu = Menu.filter((item) => {
    return item.tag === tag || tag === Tag.all;
  }).map((item) => {
    return (
      <li className="food">
        {item.image}
        <span>
          <h3 className="name">{item.name}</h3>
          <h3 className="price">{item.price}</h3>
        </span>
        <p>{item.description}</p>
      </li>
    );
  });

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <nav>
        <ul className="navMenu">
          <li>
            <button onClick={() => changeTag(Tag.all)}>All</button>
          </li>
          <li>
            <button onClick={() => changeTag(Tag.breakfast)}>Breakfast</button>
          </li>
          <li>
            <button onClick={() => changeTag(Tag.lunch)}>Lunch</button>
          </li>
          <li>
            <button onClick={() => changeTag(Tag.shake)}>Shakes</button>
          </li>
        </ul>
      </nav>
      <ul className="foodContainer">{menu}</ul>
    </div>
  );
}
