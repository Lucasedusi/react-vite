import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.rule}</span>
					</div>
				</div>

				<time dateTime="2022-08-02 14:23:45"></time>
			</header>

			<div className={styles.content}>
				<p>{/* {content.type} {content.content} */}</p>
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
