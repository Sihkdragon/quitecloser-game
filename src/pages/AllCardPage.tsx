import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Heading from "../components/atom/Heading";
import CardListContainer from "../components/molecules/CardListContainer";
import cardData from "../databases";
import { ID } from "../databases/helpers";

interface RandomItem {
  id: number;
  question: string;
}
interface RandomData extends Array<RandomItem> {}
interface PropsAvailableStatus {
  isAllActive: boolean;
  isAvailActive: boolean;
  isNotAvailActive: boolean;
}
const AllCardPage = () => {
  const [idList, setID] = useAtom(ID);
  const [data, setData] = useState<RandomData>([]);
  const [isAllActive, setisAllActive] = useState(true);
  const [isAvailActive, setisAvailActive] = useState(false);
  const [isNotAvailActive, setisNotAvailActive] = useState(false);

  useEffect(() => {
    setData(cardData);
  }, []);

  const listitems = data.map((data) => {
    return (
      <CardListContainer id={data.id} key={data.id}>
        {data.question}
      </CardListContainer>
    );
  });
  const listavailitems = data
    .filter((data) => !idList.includes(data.id))
    .map((data) => {
      return (
        <CardListContainer id={data.id} key={data.id}>
          {data.question}
        </CardListContainer>
      );
    });
  const listnotitems = data
    .filter((data) => idList.includes(data.id))
    .map((data) => {
      return (
        <CardListContainer id={data.id} key={data.id}>
          {data.question}
        </CardListContainer>
      );
    });

  return (
    <div>
      <Heading>Quite Close</Heading>

      <section className=" w-full mt-10 h-full px-8">
        <h3 className="text-light">All Question</h3>
        <div className="flex justify-between">
          <h3 className="text-light">{`Availabe Question's : ${
            data.length - idList.length
          }`}</h3>
          <NavLink to={"/"}>
            <a className="text-light underline">Go to Home Page</a>
          </NavLink>
        </div>
        <div className="grid grid-cols-3 border h-10 rounded-lg border-gold my-4">
          <button
            onClick={() => {
              setisAllActive(true);
              setisAvailActive(false);
              setisNotAvailActive(false);
            }}
            className={`text-light w-full hover:bg-gold ${
              isAllActive && "bg-gold"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setisAllActive(false);
              setisAvailActive(true);
              setisNotAvailActive(false);
            }}
            className={`text-light border-x border-x-gold w-full hover:bg-gold ${
              isAvailActive && "bg-gold"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setisAllActive(false);
              setisAvailActive(false);
              setisNotAvailActive(true);
            }}
            className={`text-light w-full hover:bg-gold ${
              isNotAvailActive && "bg-gold"
            }`}
          >
            Not Available
          </button>
        </div>
        <div className="grid grid-rows-1 gap-1 mt-2">
          {isAllActive ? (
            listitems
          ) : isAvailActive ? (
            listavailitems
          ) : isNotAvailActive ? (
            listnotitems
          ) : (
            <h1>no data found</h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllCardPage;
