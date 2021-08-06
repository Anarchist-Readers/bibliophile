import { useState } from 'react'

const User = () => {
    const [userName, setUserName] = useState()
    const [avatar, setAvatar] = useState()
    
    return (
        <div>
            Hey User
        </div>
    )
}

export default User