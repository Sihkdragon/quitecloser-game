import Router from "./router";

const App = () => {
  return (
    <div className="bg-main min-h-screen relative  pt-3 pb-20">
      <Router />
      <span className="text-light font-extralight text-sm tracking-wider absolute bottom-3 w-full text-center">
        Copyright Semanticsm
      </span>
    </div>
  );
};

export default App;
