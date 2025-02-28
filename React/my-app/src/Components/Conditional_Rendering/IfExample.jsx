import { useState } from "react"

function IfExample() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    let message;
    if(isLoggedIn){
        message = <h2>Welcome, User!</h2>;
    } else {
        message = <h2>Please Log in.</h2>;
    }
  return (
    <div>
        {message}
        <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default IfExample