import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addQuote } from '../../store/actions/actionQuotes';
import Bubble from '../common/Bubble';

class CreateQuote extends Component {
  state = {
    content: '',
    author: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleBlur = e => {
    e.target.value
      ? e.target.classList.add('white')
      : e.target.classList.remove('white');
  };
  createQuote = e => {
    const { content, author } = this.state;
    const { addQuote, history } = this.props;
    e.preventDefault();
    if (content && author) {
      addQuote({
        content,
        author,
        votes: 0,
        votedBy: []
      });
      history.push('/dashboard');
    }
  };
  render() {
    return (
      <section className="create-quote form-page mt-20">
        <div className="form-page-inner bg-pink">
          <form className="relative" onSubmit={this.createQuote}>
            <Bubble
              shape={1}
              height="100%"
              color="#ffffff"
              opacity="0.2"
              className="absolute top-0 z-0"
            />
            <h2 className="form-page-title text-white relative z-10">
              Add quote
            </h2>
            <div className="textarea-field">
              <label htmlFor="content">
                <textarea
                  id="content"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <span>
                  <span>Quote</span>
                </span>
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="text"
                  id="author"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <span>
                  <span>Author</span>
                </span>
              </label>
            </div>
            <button className="form-page-button text-beige border-beige">
              Add
              <span />
              <span />
              <span />
              <span />
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  addQuote
};

export default connect(
  null,
  mapDispatchToProps
)(CreateQuote);
