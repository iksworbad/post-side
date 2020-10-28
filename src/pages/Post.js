import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import arrow from '../assets/arrow.svg'
import { useAsync } from '../useAsync';
import { useServices } from '../useServices';

export const Post = () => {

    let { userId, id } = useParams();
    const { userService, postService } = useServices()
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [expand, setExpand] = useState(false)

    useAsync(async () => {
        setUser(await userService.getUser(userId))
        setPost(await postService.getPost(id))
        setComments(await postService.getComments(id))
    }, [])

    return (
        <div className='posts'>
            <div className='actions'>
                <a href={`/posts/${userId}`}><img src={arrow} alt='arrow' /></a>
                <div className='header-name'>{user && user.name}</div>
                <div></div>
            </div>
            <div className='post-body'>
                <div className='body-title'>{post && post.title}</div>
                <div className='body-text'>{post && post.body}</div>
                <div className='comments-button'>
                    <div className='comment-link unselectable' onClick={() => setExpand(!expand)}>{!expand ? 'Show' : 'Hide'} comments</div>
                    <div className='comment-link unselectable'>Add comment</div>
                </div>
                {expand &&
                    comments.map((comment, index) =>
                        <div className='comment-box' key={index}>
                            <div className='comment-header'>
                                <div className='comment-title'>{comment.name}</div>
                                <div className='comment-email'>{comment.email}</div>
                            </div>
                            <div className='comment-body'>{comment.body}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}