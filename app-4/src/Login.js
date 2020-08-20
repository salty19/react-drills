import React, {Component} from "react" 

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    render() {
        return (
            <div>
                <input onChange={} type="text" />
                <input onChange={} type="text" />
                <button onClick={this.handleLogin}> Login </button>
            </div>
        )
    }
}