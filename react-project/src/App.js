
import { Child } from "./child";
import { Index } from "./Components/about/Index";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Contact/Service";
import Home from "./Components/Home";
import Moyenne from "./Components/moyenne/moyenne";
import MyHook from "./MyHook";

function App() {
  const affichage = () => {
    console.log("je suis le composant fils affiché par la fonction affichage");
  }
  return (
    <div className="App">
      <p>proj réaçt</p>
      <Home />
      <Contact />
      <Service />
      <Index name={'Djebbar'} age={24} />
      <Moyenne note1={15} note2={12} />
      <Moyenne note1={17} note2={15} />
      <Child affichage={affichage} />
      <MyHook />
    </div>
  );
}

export default App;
