import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../components/atom/Heading";
import GameCard from "../components/molecules/GameCard";
import cardData from "../databases";
import { ID } from "../databases/helpers";

interface RandomItem {
  id: number;
  question: string;
}
interface RandomData extends Array<RandomItem> {}
const CardChoosePage = () => {
  const [Remover] = useAtom(ID);
  const [Random, setRandomData] = useState<RandomData>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const Data = cardData;
  useEffect(() => {
    const filteredData = Data.filter((data) => !Remover.includes(data.id));
    const RandomizedData = [];
    if (filteredData.length !== 0) {
      for (let i = 1; i <= 4; i++) {
        RandomizedData.push(
          filteredData[Math.floor(Math.random() * filteredData.length)]
        );
      }
      setRandomData(RandomizedData);
    } else {
      setIsEmpty(true);
    }
  }, [Data,Remover]);
  const listItems = !isEmpty ? (
    Random.map((data, index) => (
      // Correct! Key should be specified inside the array.
      <GameCard key={index} id={data.id} />
    ))
  ) : (
    <div className="text-light w-full flex flex-col justify-center items-center text-lg font-bold h-96">
      Question's Card is Empty
      <button
        onClick={() => {
          localStorage.removeItem("id");
          window.location.reload();
        }}
        className=" px-14 flex justify-center items-center py-2 bg-gold hover:bg-opacity-75  text-light font-bold rounded-md w-64 mt-10 text-base"
      >
        Reset Question
      </button>
    </div>
  );
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

        {isEmpty ? (
          listItems
        ) : (
          <div className="grid grid-cols-2 gap-x-4 mt-10">{listItems}</div>
        )}
        <button
          onClick={() => {
            localStorage.removeItem("id");
            window.location.reload();
          }}
          className="mx-auto px-14 flex justify-center items-center py-2 bg-gold hover:bg-opacity-75  text-light font-bold rounded-md w-full mt-10 text-base"
        >
          Reset Question
        </button>
      </section>
    </>
  );
};

export default CardChoosePage;
