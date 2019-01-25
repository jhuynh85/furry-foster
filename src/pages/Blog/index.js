import React from "react";
import "./Blog.css";

import axios from "axios";
import { toast } from "react-toastify";

import Article from "../../components/Article";

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
	}

	// async componentDidMount() {
	// 	try {
	// 		const articleList = await axios.get("/api/blog");
	// 		console.log("articleList: ", articleList.data);
	// 		this.setState({ results: articleList.data });
	// 	} catch (err) {
	// 		toast.error(err);
	// 		console.log("ERROR: ", err);
	// 	}
	// }

	render() {
		return (
			<div>
				<section className="section">
					<div className="container content">
						<h1 className="title is-1">Blog</h1>
						<Article />
					</div>
				</section>
			</div>
		);
	}
}

export default Blog;
