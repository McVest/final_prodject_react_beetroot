import styles from './comment.module.scss'
import React, { useEffect } from 'react';

const Comment = ({ comments, loadings }) => {

  useEffect(() => {

  }, [comments])

  return (
    <>
      {loadings ? <h2>Loading....</h2> :
        <div className={styles.comment}>
          <div className={styles.comment__wrapper}>
            {
              comments.map((comment, i) => (
                <div key={comment.id} className={styles.comment__item}>
                  <h3>{comment.body}</h3>
                  <div className={styles.comment__name}>
                    <h4>{comment.name}</h4>
                    <h5 className={styles.comment__email}>{comment.email}</h5>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }
    </>
  );

};

export default Comment;