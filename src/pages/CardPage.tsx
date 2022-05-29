import Button from "../components/atom/Button";
import Heading from "../components/atom/Heading";
import LogoBG from "../components/atom/img/LogoBG";
import cardData from "../databases";
import { useParams } from "react-router-dom";
// import { useAtom } from "jotai";
// import { ID } from "../databases/helpers";
// import { useEffect } from "react";

const CardPage = () => {
  let params = useParams() as any;
  let id = params.id as number;
  let nomor = id === 0 ? 0 : id - 1;

  const text = id ? cardData[nomor].question : "No Data Found";

  return (
    <>
      <Heading>Quite Close</Heading>

      <section className=" w-full mt-10 px-15 h-full px-8 flex flex-col">
        <h3 className="text-light">Your Card</h3>
        <div className="h-[550px] mt-5 flex flex-col items-center border-2 border-light rounded-md relative px-10">
          <LogoBG />
          <p className="text-light text-xl tracking-wider font-bold text-center mt-10">
            {text}
          </p>
          <span className="text-gold font-semibold my-4 absolute bottom-4 text-center">
            "Honesty is the first chapter in the book of wisdom"
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <Button classname="mx-auto w-full" goto={`../play`}>
            Pick Another Card
          </Button>
        </div>
      </section>
    </>
  );
};
export default CardPage;
