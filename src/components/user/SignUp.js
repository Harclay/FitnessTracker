import React, {useState} from "react";
import { fetchUser } from "./UserApi";
import { useNavigate } from "react-router-dom"

const Register = ({setToken}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(ev) {
        
        ev.preventDefault();

        const user = {username, password}

        const results = await fetchUser(user);

        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem("token: ", results.data.token)
            navigate("/")
        }
    }

    return (

        <>
        <h1> SIGN UP </h1>

        <form onSubmit={handleSubmit}>

        <div>
        <p>Create Username:</p>
        <input
            type="text"
            placeholder="at least 8 characters"
            onChange={(ev) => setUsername(ev.target.value)}
        />
        </div>

        <div>
            <p>Create Password:</p>
            <input
                type="password"
                placeholder="at least 8 characters"
                onChange={(ev) => setPassword(ev.target.value)}
                />
        </div>

        <button type="submit">
            Complete
        </button>
        </form>
        </>
    )

}

export default Register