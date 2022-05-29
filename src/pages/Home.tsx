import Button from "../components/atom/Button";
import Heading from "../components/atom/Heading";
import LogoBG from "../components/atom/img/LogoBG";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { atom, useAtom } from "jotai";
const Home = () => {
  return (
    <div className="w-full h-full">
      <LogoBG />
      <Heading>Quite Close</Heading>
      <section className=" w-full mt-52 h-full flex flex-col justify-center items-center">
        <span className="text-light mb-5">Play With Friends</span>
        <Button goto="play">Play</Button>
      </section>
      <button
        onClick={HowToPlay}
        className="underline block text-lg text-light text-center mt-36 mx-auto hover:bg-slate-700"
      >
        How To Play
      </button>
    </div>
  );
};

function HowToPlay() {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <p>Hello World</p>,
    didOpen: () => {
      return MySwal.fire(
        <div>
          <h1 className="text-main">Guides</h1>
          <ul className="font-light text-sm">
            <li>1. Bring Your Friend's to Play together</li>
            <li>2. Pick a card to open question</li>
            <li>3. Everyone in the game answer the question</li>
          </ul>
        </div>
      );
    },
  });
}
export default Home;
