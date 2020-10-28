import React, { useState } from 'react'
import { useAsync } from '../useAsync'
import { useServices } from '../useServices'

export const MainPage = () => {

  const { userService } = useServices()
  const [users, setUsers] = useState([]);

  useAsync(async () => {
    setUsers(await userService.getUsers())
  }, [])


  return (
    <div className='users'>
      { users.length &&
        users.map(user =>
          <div className='user-box'>
            <div className='name'>{user.name}</div>

            <div className='contact'>{user.email}</div>
            <div className='contact'>{user.phone}</div>
            <div className='contact'>{user.website}</div>

            <div className='catch-phrase'>{user.company.catchPhrase}</div>
            <a className='user-button' href={`/posts/${user.id}`}>Details</a>
          </div>
        )}
    </div>
  )

}