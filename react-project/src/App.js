import { Index } from "./Components/about/Index";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Contact/Service";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <p>proj réaçt</p>
      <Home />
      <Contact />
      <Service />
      <Index name={'Djebbar'} age={24} />
    </div>
  );
}

export default App;
