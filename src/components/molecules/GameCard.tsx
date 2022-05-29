import LogoBG from "../atom/img/LogoBG";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { ID } from "../../databases/helpers";
interface PropsGameCard {
  id: number;
}
const GameCard = ({ id }: PropsGameCard) => {
  const [RemoveID, setRemoveID] = useAtom(ID);

  const Navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setRemoveID([...RemoveID, id]);
        Navigate("../play/" + id, { replace: true });
      }}
      id={id.toString()}
      className="w-full h-60 border-2 flex justify-center items-center rounded border-slate duration-500 my-2 shadow-md hover:shadow-lg shadow-light hover:shadow-light hover:cursor-pointer outline outline-1 hover:outline-gold"
    >
      <LogoBG />
    </div>
  );
};

export default GameCard;
