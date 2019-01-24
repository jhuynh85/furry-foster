import React from "react";
import "./Article.css";

const Article = props => {
	return (
		<div>
			<div>
				<h1>Title </h1>
				<p>Author</p>
			</div>
			<div>
				<p>Body</p>
			</div>
		</div>
	);
};

export default Article;
