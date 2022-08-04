import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import ptBr from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
	const [comments, setComments] = useState([]);
	const [newCommentText, setNewCommentText] = useState("");

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

	function handleCreateNewComment() {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleChangeNewComment() {
		const { value } = event.target;

		setNewCommentText(value);
	}

	function handleRemoveComment() {
		const removeComment = comments.filter((comment) => comment.id !== id);

		setComments(removeComment);
	}

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
				{content.map((line, index) => {
					return <p key={index}>{line.content}</p>;
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu Feedback</strong>

				<textarea
					name="comments"
					value={newCommentText}
					onChange={handleChangeNewComment}
				/>

				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment content={comment} />;
				})}
			</div>
		</article>
	);
}
