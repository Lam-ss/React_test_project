import s from './Post.module.css';
import avaPost from '../../../../my_img/images_1.jfif';




const Post = (props) => {

    return (
        <div className={s.item}>
            <img src={avaPost} />
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;