import { NavLink } from "react-router-dom";
import Heading from "../components/atom/Heading";
import GameCard from "../components/molecules/GameCard";
import cardData from "../databases";
const CardChoosePage = () => {
  const Data = cardData;
  const listItems = Data.map((data) => (
    // Correct! Key should be specified inside the array.
    <GameCard key={data.id} id={data.id} />
  ));
  return (
    <>
      <Heading>Quite Close</Heading>

      <section className=" w-full mt-5 px-15 h-full px-8">
        <div className="flex justify-between">
          <h3 className="text-light">Choose Card</h3>
          <NavLink to={"/"}>
            <span className="text-slate underline">Go to Home Page</span>
          </NavLink>
        </div>

        <div className="grid grid-cols-2 gap-x-4">{listItems}</div>
      </section>
    </>
  );
};

export default CardChoosePage;
