import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../components/atom/Heading";
import GameCard from "../components/molecules/GameCard";
import cardData from "../databases";

interface RandomItem {
  id: number;
  question: string;
}
interface RandomData extends Array<RandomItem> {}
const CardChoosePage = () => {
  const Data = cardData;
  // const RandomizedData = Data[Math.floor(Math.random() * Data.length)];
  const [Random, setRandomData] = useState<RandomData>([]);
  useEffect(() => {
    const RandomizedData = [];
    for (let i = 1; i <= 4; i++) {
      RandomizedData.push(Data[Math.floor(Math.random() * Data.length)]);
    }
    setRandomData(RandomizedData);
  }, [Data]);

  const listItems = Random.map((data) => (
    // Correct! Key should be specified inside the array.
    <GameCard key={data.id} id={data.id} />
  ));
  return (
    <>
      <Heading>Quite Close</Heading>

      <section className=" w-full mt-10 px-15 h-full px-8">
        <div className="flex justify-between">
          <h3 className="text-light">Choose Card</h3>
          <NavLink to={"/"}>
            <span className="text-slate underline">Go to Home Page</span>
          </NavLink>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-10">{listItems}</div>
      </section>
    </>
  );
};

export default CardChoosePage;
