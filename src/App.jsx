import { Header } from "./components/Header/Header";
import { Post } from "./Post";

import "./styles/global.css";

function App() {
	return (
		<>
			<Header />

			<Post
				author="Lucas Eduardo"
				content="Este é um teste, Este é um teste, Este é um teste"
			/>

			<Post
				author="Kamylla"
				content="Este é um teste, Este é um teste, Este é um teste"
			/>
		</>
	);
}

export default App;
