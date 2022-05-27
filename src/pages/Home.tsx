import React from "react";
import Button from "../components/atom/Button";
import Heading from "../components/atom/Heading";
import LogoBG from "../components/atom/img/LogoBG";

const Home = () => {
  return (
    <div className="">
      <LogoBG />
      <Heading>Quite Close</Heading>
      <section className=" w-full mt-52 h-full flex flex-col justify-center items-center">
        <span className="text-light mb-5">Play With Friends</span>
        <Button goto="play">Play</Button>
      </section>
    </div>
  );
};

export default Home;
