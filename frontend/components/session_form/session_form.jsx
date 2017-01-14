import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  clearErrors() {
    this.setState({ errors: [] });
  }

  renderErrors() {
    return(
      <ul className="login-signup-errors">
        {this.props.errors.map((error, idx) => (
          <li className="error-detail"key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  render() {
    const text = this.props.formType === "login" ? "Sign In" : "Create Account";

    if (this.props.formType === "login") {
      return (
        <div className="login-form-container">
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <h2>
              <img
                className="logo-static"
                src={require('../../../app/assets/images/logo-title.png')}/>
            </h2>
            <h3>
              {text} and start watching!
            </h3>

            <div className="login-form">
              <label className="login-input">
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={this.update("username")}/>
              </label>

              <br/>
              <label className="login-input">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.update("password")}/>
              </label>

              {this.renderErrors()}

              <label className="login-input">
                <input className="login-button" type="submit" value={text} />
              </label>

            </div>

          </form>
        </div>
      );
    }

    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <h2>
            <img
              className="logo-static"
              src={require('../../../app/assets/images/logo-title.png')}/>
          </h2>
          <h3>
            {text} and start watching!
          </h3>

          <div className="login-form">
            <label className="login-input">
              <input
                type="text"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.update("email")}/>
            </label>

            <br/>
            <label className="login-input">
              <input
                type="text"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.update("username")}/>
            </label>

            <br/>
            <label className="login-input">
              <input
                type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.update("password")}/>
            </label>

            {this.renderErrors()}

            <label className="login-input">
              <input className="login-button" type="submit" value={text} />
            </label>
          </div>

        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
