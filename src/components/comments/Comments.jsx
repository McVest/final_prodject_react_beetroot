import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Comment from '../comment/Comment';
import Pagination from '@mui/material/Pagination';
import styles from './comments.module.scss'

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    test();
  }, [props])

  const test = async (e, page = 1) => {
    setLoading(true);

    await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${props.limit}`)
      .then(res => {
        console.log("!!!!!!!", res.data);
        setComments(res.data);
        setLoading(false);
      })
  }

  function Pag(params) {
    if (params.pag) {
      return <Pagination className={styles.paginationCss} onChange={test} color="secondary" count={100} showFirstButton showLastButton />
    }
    return <></>
  }
  return (
    <div className={styles.comments}>
      <div className={styles.comments__wrapper}>
        {props.text ?
          <div className={classNames(styles.comments__block, styles.comments__block_text)}>
            <div className={styles.comments__info}>
              <h2>This is what people say about me</h2>
              <p>Here are a few lines from people who I have worked with over the past 8+ years in my design career.</p>
            </div>
            <div className={styles.mid__link}>
              <div className={styles.comments__link}>
                <div className={styles.comments__link_effect_3}>
                  <Link to='/Comments' >See all testimonials</Link>
                </div>
              </div>
            </div>
          </div>
          :
          <></>

        }
        <div className={styles.comments__box} style={props.text ? {maxWidth: 630}:{maxWidth: 1440}}>
          <Comment comments={comments} loadings={loading} />
          <Pag pag={props.pagination} />
        </div>
      </div>
    </div>
  );
};

export default Comments;