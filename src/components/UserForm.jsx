import React, {useState} from 'react'

const UserForm = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmpassword] = useState("");

    return (
    <div>
        <form>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmpassword(e.target.value) } />
            </div>
        </form>
        <h1>Your Form Data</h1>
        <p>First Name {firstname}</p>
        <p>Last Name {lastname}</p>
        <p>Email  {email}</p>
        <p>Password {password}</p>
        <p>Confirm Password {confirmpassword}</p>
    </div>
    )
}

export default UserForm