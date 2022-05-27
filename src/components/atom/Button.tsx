import { useNavigate } from "react-router-dom";
interface PropsButton {
  children: React.ReactNode;
  classname?: string;
  goto?: string;
}
const Button = ({ children, classname = "", goto }: PropsButton) => {
  let navigate = useNavigate();
  return (
    <button
      className={`px-14 py-2 bg-gold hover:bg-opacity-75 text-2xl text-light font-bold rounded-md ${classname}`}
      onClick={() => {
        goto && navigate(goto, { replace: true });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
