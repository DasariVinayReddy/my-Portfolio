import "./App.css";
import { Header } from "./Components/Header/Header";
import { Services } from "./Components/Features/Services";
import { Portfolio } from "./Components/Myportfolio/portfolio";
import { Resume } from "./Components/Myresume/Resume";
import { BlogSection1 } from "./Components/Blog/Blogsection";
import Contact from "./Components/Contact /Contact";
import { Footer } from "./Components/Footer/Footer";
// import { AllRoutes } from "./Routes/Routes";
function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <Resume />
      <BlogSection1 />
      <Contact />
      <Footer />
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
