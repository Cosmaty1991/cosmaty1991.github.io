class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: []
    };
  }

  componentWillMount() {
    this._fetchComments();
  }

  render() {
    const comments = this._getComments();
    return(
      <div className="row comments-container">
        <div className="cell container">
          <h2 className="text-center">Join The Discussion</h2>
          <div className="comment-box">
            <CommentForm addComment={ this._addComment.bind(this) } />
            <CommentAvatarList avatars={ this._getAvatars() } />
            { this._getPopularMessage(comments.length) }
            <h3 className="comment-count">{ this._getCommentsTitle(comments.length) }</h3>
            <div className="comment-list">
              {comments}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getAvatars() {
    return this.state.comments.map(comment => comment.avatarUrl);
  }

  _getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, dont miss out!</div>
       );
    }
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return <Comment
               id={ comment.id }
               author={ comment.author }
               body={ comment.body }
               avatarUrl={ comment.avatarUrl }
               onDelete={ this._deleteComment.bind(this) }
               key={ comment.id } />
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${ commentCount } comments`;
    }
  }

  _addComment(commentAuthor, commentBody) {
    const comment = {
      id: this.state.comments.length + 1,
      author: commentAuthor,
      body: commentBody,
    };

    this.setState({
      comments: this.state.comments.concat([comment])
    });

  }

  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'comments.json',
      success: (comments) => {
        this.setState({ comments })
      }
    });
  }

  _deleteComment(commentID) {
    const comments = this.state.comments.filter(
      comment => comment.id !== commentID
    );

    this.setState({ comments });
  }
}

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: 0
    };
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this._handleSubmit.bind(this) }>
        <label>New comment</label>
        <div className="comment-form-fields">
          <input className="form-control" placeholder="Name:" ref={ c => this._author = c } required />
          <br />
          <textarea className="form-control" placeholder="Comment:" ref={ c => this._body = c } onChange={ this._getCharacterCount.bind(this) } required></textarea>
        </div>
        <br />
        <div className="comment-form-actions">
          <button type="submit" className="btn btn-primary">
            Add comment
          </button>
        </div>
      </form>
    );
  }

  _getCharacterCount() {
    this.setState({
      characters: this._body.value.length
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this._author.value, this._body.value);
    this._author.value = '';
    this._body.value = '';
  }
}

class CommentAvatarList extends React.Component {
  render() {
    const { avatars = [] } = this.props;

    return (
      <div className="comment-avatars"></div>
    )
  }
}

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;

    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return (
      <div className="comment">
        <blockquote className="bg-warning">
          <p className="comment-header"><h3>{ this.props.author }</h3></p>
          <blockquote className="comment-body">{ commentBody }</blockquote>
          <div className="comment-actions">
            <CommentRemoveConfirmation onDelete={ this._handleDelete.bind(this) } />
          </div>
        </blockquote>
      </div>
    );
  }

  _handleDelete() {
    this.props.onDelete(this.props.id);
  }
}

class CommentRemoveConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      showConfirm: false
    };
  }

  render() {
    let confirmNode;

    if (this.state.showConfirm) {
      return (
        <span>
          <a href="" className="text-danger" onClick={ this._confirmDelete.bind(this) }><strong>Yes </strong></a> - or - <a className="text-danger" href="" onClick={ this._toggleConfirmMessage.bind(this) }><strong> No</strong></a>
        </span>
      );
    } else {
      confirmNode = <a className="text-danger" href="" onClick={ this._toggleConfirmMessage.bind(this) }><strong>Delete comment?</strong></a>;
    }

    return (
      <span>
        { confirmNode }
      </span>
    );
  }

  _toggleConfirmMessage(e) {
    e.preventDefault();

    this.setState({
      showConfirm: !this.state.showConfirm
    });
  }

  _confirmDelete(e) {
    e.preventDefault();
    this.props.onDelete();
  }
}

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
  );
})
