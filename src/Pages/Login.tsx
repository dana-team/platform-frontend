import Modal from "components/Modal/Modal";
import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="h-screen bg-cover bg-no-repeat bg-login-pattern">
        <Modal
          children={
            <div className="bg-mono/basic-12 border border-mono/basic-10 h-80 w-150"></div>
          }
        />
      </div>
    );
  }
}

export default Login;
