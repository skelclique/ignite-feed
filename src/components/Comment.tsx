import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommmentProps {
  content: string;
  onDeleteComment: () => void;
}

export function Comment({
  content,
  onDeleteComment
}: CommmentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount => likeCount + 1)
  }
    
  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/skelclique.png" 
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Bortolo</strong>

              <time
                title="13 de Março às 13:54h"
                dateTime="2023-03-13 13:54:30"
              >
                Cerca de 18h atràs
              </time>
            </div>

            <button onClick={onDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
