import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

//============Import components=========//
import Header from "./containers/Header";
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
import Login from "./pages/Login";
import Profile from "./pages/Profile";

class App extends Component {
	render() {
		console.log("Created by Joseph Huynh 2018");
		return (
			<BrowserRouter>
				<div className="Site">
					<div className="Site-content">
						<ToastContainer
							toastClassName="custom-toast-css"
							position="bottom-right"
							autoClose={3000}
							hideProgressBar
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnVisibilityChange
							draggable
							pauseOnHover
						/>
						<Header />
						<Switch>
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
							<Route path="/login" component={Login} />
							<Route path="/user/:userId" component={Profile} />
						</Switch>
						<br />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
