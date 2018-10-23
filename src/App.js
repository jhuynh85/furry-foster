import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

//============Import components=========//
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/HigherOrderComponents/scrollToTop";

//============Import pages=============//
import Main from "./pages/Main";
import Pets from "./pages/Pets";
import Fosters from "./pages/Fosters";
import FostersLearn from "./pages/FostersLearn";
import FostersApply from "./pages/FostersApply";
import FostersTails from "./pages/FostersTails";
import Rescues from "./pages/Rescues";
import RescuesLearn from "./pages/RescuesLearn";
import RescuesApply from "./pages/RescuesApply";
import RescuesTails from "./pages/RescuesTails";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import LoginRescues from "./pages/LoginRescues";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import PetProfile from "./pages/PetProfile";

class App extends Component {
	render() {
		console.log("Created by Joseph Huynh & Margaret Choi 2018");
		return (
			<BrowserRouter>
				<ScrollToTop>
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
								<Route exact path="/pets/:petID" component={PetProfile} />
								<Route exact path="/pets" component={Pets} />
								<Route exact path="/fosters" component={Fosters} />
								<Route exact path="/fosters/learn" component={FostersLearn} />
								<Route exact path="/fosters/happytails" component={FostersTails} />
								<Route exact path="/fosters/apply" component={FostersApply} />
								<Route exact path="/rescues" component={Rescues} />
								<Route exact path="/rescues/learn" component={RescuesLearn} />
								<Route exact path="/rescues/happytails" component={RescuesTails} />
								<Route exact path="/rescues/apply" component={RescuesApply} />
								<Route path="/programs" component={Programs} />
								<Route path="/partners" component={Partners} />
								<Route path="/events" component={Events} />
								<Route path="/donate" component={Donate} />
								<Route path="/about" component={About} />
								<Route path="/volunteer" component={Volunteer} />
								<Route path="/blog" component={Blog} />
								<Route path="/faq" component={FAQ} />
								<Route path="/contact" component={Contact} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/login/rescues" component={LoginRescues} />
								<Route path="/profile" component={Profile} />
								<Route exact path="/unauthorized" component={Unauthorized} />
							</Switch>
						</div>
						<Footer />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
