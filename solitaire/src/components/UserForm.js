import React, { useState } from 'react'

function UserForm({addNewUser}) {
    const [userData, setUserData] = useState('')

    function handleOnChange(e) {
        setUserData(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        //POST Request
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(newUserName => addNewUser(newUserName))
        setUserData('')

    }

    return (
        <form 
        className="userForm"
        onSubmit={handleSubmit}>
            Please create a username:
            <input
            value={userData}
            name="name"
            onChange={handleOnChange}
            />
            <input 
            type="submit" 
            value="Enter"  
            />
        </form>
    )
}

export default UserForm