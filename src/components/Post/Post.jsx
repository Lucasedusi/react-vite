import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBr,
		}
	);

	const publishedRelativeDateToNow = formatDistanceToNow(publishedAt, {
		locale: ptBr,
		addSuffix: true,
	});

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

				<time dateTime={publishedDateFormatted}>
					{publishedRelativeDateToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					return <p>{line.content}</p>;
				})}
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
