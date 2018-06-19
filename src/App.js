import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

//============Import components=========//
import Header from "./components/Header";
import Footer from "./components/Footer";

//============Import pages=============//
import Main from "./pages/Main";
import Pets from "./pages/Pets";
import Fosters from "./pages/Fosters";
import Rescues from "./pages/Rescues";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import HappyTails from "./pages/HappyTails";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Site">
          <div className="Site-content">
            <Header />
            <br />
            <Route exact path="/" component={Main} />
            <Route path="/pets" component={Pets} />
            <Route path="/fosters" component={Fosters} />
            <Route path="/rescues" component={Rescues} />
            <Route path="/programs" component={Programs} />
            <Route path="/partners" component={Partners} />
            <Route path="/events" component={Events} />
            <Route path="/donate" component={Donate} />
            <Route path="/about" component={About} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/happytails" component={HappyTails} />
            <Route path="/blog" component={Blog} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <br/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
