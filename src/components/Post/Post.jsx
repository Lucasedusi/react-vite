import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder src="https://github.com/lucasedusi.png" />
					<div className={styles.authorInfo}>
						<strong>Lucas Eduardo</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time dateTime="2022-08-02 14:23:45">Publicado há 1 hora</time>
			</header>

			<div className={styles.content}>
				<p>
					Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
					projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
					é DoctorCare 🚀{" "}
				</p>
				<p>
					👉 <a href="">jane.design/doctorcare</a>
				</p>

				<p>
					<a href="">#novoprojeto #nlw #rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu Feedback</strong>

				<textarea />

				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
