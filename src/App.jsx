import { Header } from "./components/Header/Header";
import { Post } from "./Post";

import "./styles/global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<SideBar />
				<main>
					<Post
						author="Lucas Eduardo"
						content="Este é um teste, Este é um teste, Este é um teste"
					/>

					<Post
						author="Kamylla"
						content="Este é um teste, Este é um teste, Este é um teste"
					/>
				</main>
			</div>
		</>
	);
}

export default App;
