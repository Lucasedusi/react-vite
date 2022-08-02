import styles from "./Sidebar.module.css";

export function SideBar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1659269368191-dde25f0cf6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60"
			/>

			<div className={styles.profile}>
				<strong>Lucas Eduardo</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">Editar Perfil</a>
			</footer>
		</aside>
	);
}
