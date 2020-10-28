import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import arrow from '../assets/arrow.svg'
import plus from '../assets/add.svg'
import deleteIcon from '../assets/delete.svg'
import arrowExpand from '../assets/arrowExpand.svg'
import { useAsync } from '../useAsync';
import { useServices } from '../useServices';

export const UserPosts = () => {

    let { id } = useParams();
    const { userService } = useServices()
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useAsync(async () => {
        setUser(await userService.getUser(id))
        setPosts(await userService.getUserPosts(id))
    }, [])


    return (
        <div className='posts'>
            <div className='actions'>
                <a href='/'><img src={arrow} alt='arrow' /></a>
                <div className='header-name'>{user && user.name}</div>
                <a onClick={() => alert('Brak design-u ;)')} href='#'><img src={plus} alt='plus' /></a>
            </div>
            {!!posts.length &&
                posts.map((post, index) =>
                    <div className='link-post' key={index}>
                        <a href={`/post/${user.id}/${post.id}`}>
                            <div className='short-post'>
                                <img src={deleteIcon} alt='delete' />
                                <p>{post.title}</p>
                                <img src={arrowExpand} alt='more info' />
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    )
}