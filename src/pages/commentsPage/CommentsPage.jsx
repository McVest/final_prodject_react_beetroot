import React from 'react';
import styles from './commentsPage.module.scss'
import { createTheme } from '@mui/material/styles';
import Comments from '../../components/comments/Comments';

const CommentsPage = () => {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#5221e6',
      },
    },
  });
  return (
    <div className={styles.comments_page}>
      <Comments limit={20} pagination={true} text={false} />
    </div>
  );
};

export default CommentsPage;