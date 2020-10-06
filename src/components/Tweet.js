import React, { useState } from "react";

import commentImg from "../img/comment.svg";
import likeImg from "../img/like.svg";
import shareImg from "../img/share.svg";
import commentImgActive from "../img/comment_active.svg";
import likeImgActive from "../img/like_active.svg";
import shareImgActive from "../img/share_active.svg";
import uploadImg from "../img/upload.svg";
import confirmImg from "../img/confirm.svg";
import downArrowImg from "../img/down-arrow.svg";

const Tweet = ({ users, userId, date, content, image }) => {
    const author = users.find((el) => el.id === userId);

    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);
    const [comment, setComment] = useState(0);
    const [isComment, setIsComment] = useState(false);
    const [share, setShare] = useState(0);
    const [isShare, setIsShare] = useState(false);

    const likeToggler = () => {
        if (isLike) {
            setLike(() => like - 1);
            setIsLike(!isLike);
        } else {
            setLike(() => like + 1);
            setIsLike(!isLike);
        }
    };

    const commentToggler = () => {
        if (isComment) {
            setComment(() => comment - 1);
            setIsComment(!isComment);
        } else {
            setComment(() => comment + 1);
            setIsComment(!isComment);
        }
    };

    const shareToggler = () => {
        if (isShare) {
            setShare(() => share - 1);
            setIsShare(!isShare);
        } else {
            setShare(() => share + 1);
            setIsShare(!isShare);
        }
    };
    return (
        <div className="post-wrapper">
            <div
                className="post_avatar"
                style={{ backgroundImage: `url(${author?.avatar})` }}
            ></div>
            <div className="content-column">
                <div className="name-row">
                    <div className="name">{author?.name}</div>
                    <img src={confirmImg} alt="Confirmed" className="confirm" />
                    <div className="nickname">{author?.username}</div>
                    <div className="dot"></div>
                    <div className="date">{date}</div>
                    <img
                        className="more-arrow"
                        src={downArrowImg}
                        alt="Show more"
                    />
                </div>
                <div className="content">{content}</div>
                <div className="content-img">
                    <img src={image} alt="Content" />
                </div>
                <div className="social-btns">
                    <div onClick={commentToggler}>
                        <img
                            src={isComment ? commentImgActive : commentImg}
                            alt="Comment"
                        />
                        <span>{comment}</span>
                    </div>
                    <div onClick={shareToggler}>
                        <img
                            src={isShare ? shareImgActive : shareImg}
                            alt="Share"
                        />
                        <span>{share}</span>
                    </div>
                    <div onClick={likeToggler}>
                        <img
                            src={isLike ? likeImgActive : likeImg}
                            alt="Like"
                        />
                        <span>{like}</span>
                    </div>
                    <div>
                        <img src={uploadImg} alt="Upload" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
