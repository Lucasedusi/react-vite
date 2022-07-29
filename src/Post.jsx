import React from "react";

export function Post(props) {
	return (
		<>
			<p>{props.author}</p>
			<span>{props.content}</span>
		</>
	);
}
