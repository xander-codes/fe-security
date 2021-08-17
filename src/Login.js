import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:8080/authenticate";

        const user_object = {
            username: username,
            password: password
        };

        axios.post(endpoint, user_object).then(res => {
            localStorage.setItem("authorization", res.data.token);
            return handleDashboard();
        });
    };

    const handleDashboard = () => {
        axios.get("http://localhost:8080/dashboard").then(res => {
            if (res.data === "success") {
                history.push("/dashboard");
            } else {
                alert("Authentication failure");
            }
        });
    }

    return (
        <div>
            <div className="wrapper">
                <form className="form-signin" onSubmit={handleFormSubmit}>
                    <h2 className="form-signin-heading">Please login</h2>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="User name"
                               value="admin"
                               onChange={setUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control"
                               placeholder="password"
                               value="admin"
                               onChange={setPassword}
                        />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;
