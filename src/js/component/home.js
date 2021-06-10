import React from "react";
import castle from "./castle";
import hurry from "./hurry";
import overworld from "./overworld";

export function Home() {
	return (
		<div className="api-spotify">
			<p>Hello World</p>
			<ul>
				<li>
					<Castle />
				</li>
				<li>
					<Hurry />
				</li>
				<li>
					<Overworld />
				</li>
			</ul>
		</div>
	);
}
