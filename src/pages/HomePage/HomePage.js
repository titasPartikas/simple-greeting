import Section from "../../components/Section/Section";
import "./HomePage.css";
import { useState } from "react";

const Home = () => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleClick = () => {
    setHasBeenClicked(true);
  };

  return (
    <div className="home-page">
      <Section>
        <img
          className="img"
          src="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/cherries-planting-growing-harvesting.jpg?itok=6B436uV8"
        ></img>
      </Section>
      <Section>
        <button onClick={handleClick}>Spustelk</button>
      </Section>
      <Section>
        {hasBeenClicked && <p>Sveiki atvyke!</p>}
      </Section>
    </div>
  );
};

export default Home;
