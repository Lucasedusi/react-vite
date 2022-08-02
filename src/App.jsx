import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";

import "./styles/global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post/Post";

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<SideBar />
				<main>
					<Post />
					<Post />
				</main>
			</div>
		</>
	);
}

export default App;
