import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://cdn.kwork.ru/pics/t0/85/109231-1.jpg" />
        {props.message}
        <div>
            <span>{props.likeCount} likes</span>
        </div>
    </div>
}

export default Post;