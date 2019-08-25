import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/actionAuth';
import Bubble from '../common/Bubble';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { signUp, history } = this.props;
    signUp(this.state);
    history.push('/');
  };
  handleBlur = e => {
    e.target.value
      ? e.target.classList.add('white')
      : e.target.classList.remove('white');
  };
  render() {
    const { authError } = this.props;
    return (
      <section className="sign-up form-page mt-10">
        <div className="form-page-inner bg-orange overflow-hidden">
          <form onSubmit={this.handleSubmit} className="relative">
            <h2 className="form-page-title text-white">Sign Up</h2>
            <Bubble
              shape={1}
              width="130%"
              height="130%"
              color="#ffffff"
              opacity="0.4"
              className="absolute z-0 top-30"
            />
            <div className="input-field">
              <label>
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  autoComplete="off"
                  onBlur={this.handleBlur}
                />
                <span>
                  <span>Email</span>
                </span>
              </label>
            </div>
            <div className="input-field">
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <span>
                  <span>Password</span>
                </span>
              </label>
            </div>
            <div className="input-field">
              <label htmlFor="first-name">
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <span>
                  <span>First Name</span>
                </span>
              </label>
            </div>
            <div className="input-field">
              <label htmlFor="last-name">
                <input
                  type="text"
                  id="lastName"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <span>
                  <span>Last Name</span>
                </span>
              </label>
            </div>
            <button className="form-page-button text-mintBlue border-mintBlue">
              Sign Up
              <span />
              <span />
              <span />
              <span />
            </button>
            <div className="error">{authError ? <p>{authError}</p> : null}</div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = {
  signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
