import { Provider } from "./context/context";

import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Recipies from "./components/Recipies/Recipies";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <Provider>
      <Toaster />
      <div className="App">
        <Navbar />
        <Carousel />
        <About />
        <Categories />
        <Recipies />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
