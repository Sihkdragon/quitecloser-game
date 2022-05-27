import LogoBG from "../atom/img/LogoBG";

import { useNavigate } from "react-router-dom";

interface PropsGameCard {
  id: number;
}
const GameCard = ({ id }: PropsGameCard) => {
  const Navigate = useNavigate();
  return (
    <div
      onClick={() => {
        Navigate("../play/" + id, { replace: true });
      }}
      className="w-full h-60 border-2 flex justify-center items-center rounded border-slate duration-500 my-2 shadow-md hover:shadow-lg shadow-light hover:shadow-light hover:cursor-pointer outline outline-1 hover:outline-gold"
    >
      <LogoBG />
    </div>
  );
};

export default GameCard;
