import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Dummy components to be replaced later
const Main = () => <h2>Main page</h2>;
const Pets = () => <h2>Pets - Find a foster pet</h2>;
const Fosters = () => <h2>Fosters - Join the community</h2>;
const Rescues = () => <h2>Rescues - Saving pets together</h2>;
const Programs = () => <h2>Programs ending euthanasia</h2>;
const Partners = () => <h2>Partners - Our friends</h2>;
const Events = () => <h2>Events - Join the fight</h2>;
const Donate = () => <h2>Donate - Support the cause</h2>;

class App extends Component {
  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/pets" component={Pets} />
              <Route path="/fosters" component={Fosters} />
              <Route path="/rescues" component={Rescues} />
              <Route path="/programs" component={Programs} />
              <Route path="/partners" component={Partners} />
              <Route path="/events" component={Events} />
              <Route path="/donate" component={Donate} />
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
