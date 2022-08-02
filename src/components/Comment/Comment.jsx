import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img className={styles.avatar} src="https://github.com/lucasedusi.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Eduardo</strong>

							<time dateTime="2022-08-02 14:23:45">Publicado há 1 hora</time>
						</div>

						<button>
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom, Parabéns</p>
				</div>

				<footer>
					<button>
						<ThumbsUp /> Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
