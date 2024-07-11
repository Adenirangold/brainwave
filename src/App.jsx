import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header></Header>
        <Hero></Hero>
        <ButtonGradient></ButtonGradient>
      </div>
    </>
  );
}

export default App;
