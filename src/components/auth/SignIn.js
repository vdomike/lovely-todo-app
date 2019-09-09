import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../store/actions/actionAuth';
import Bubble from '../common/Bubble';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    const { signIn, history } = this.props;
    e.preventDefault();
    signIn(this.state);
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
      <section className="sign-in">
        <div className="form-page mt-20">
          <div className="form-page-inner bg-mintBlue overflow-hidden">
            <form className="relative" onSubmit={this.handleSubmit}>
              <h2 className="form-page-title text-orange">Sign In</h2>
              <Bubble
                shape={1}
                width="150%"
                height="150%"
                color="#ff787f"
                opacity="0.2"
                className="absolute z-0 bottom-30"
              />
              <div className="input-field">
                <label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span>
                    <span>Email</span>
                  </span>
                </label>
              </div>
              <div className="input-field">
                <label>
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
              <button className="form-page-button text-pink border-pink">
                Login
                <span />
                <span />
                <span />
                <span />
              </button>
              <div className="error">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
