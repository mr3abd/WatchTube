import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _ensureLoggedIn(e) {
    e.preventDefault();
    if (!this.props.currentUser) this.props.router.push("/login");
  }

  componentDidMount() {
    $(".creator-buttons .submit-button").prop('disabled', true);
  }

  componentDidUpdate() {
    if(this.state.body === ""){
      $(".creator-buttons .submit-button").prop('disabled',true);
    }else{
      $(".creator-buttons .submit-button").prop('disabled',false);
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const comment = {
      body: this.state.body,
      user_id: this.props.currentUser.id,
      video_id: this.props.videoId
    };

    this.props.processForm(comment);
    this.setState({ body: "" });
  }

  render(){
    const { currentUser } = this.props;

    let avatarUrl = "https://res.cloudinary.com/dxfu1kzhk/image/upload/v1484934619/turtle_ho9l5f.png";
    if(currentUser){
      avatarUrl = currentUser.avatar_url;
    }

    return(
      <div className="comment-form-container comment-creator">
        <form className="comment-form"
          onClick={ this._ensureLoggedIn }
          onSubmit={ this.handleSubmit }>
          <img className="user-avatar" src={avatarUrl}></img>
          <textarea className="comment-form-text"
            onChange={ this.update }
            placeholder="Add a public comment..."
            value={ this.state.body }/>
        </form>

        <div className="button-container group creator-buttons">
          <button className="submit-button"
            onClick={ this.handleSubmit }>Comment</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);
