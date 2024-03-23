// CommentBar.js
import React, { useState } from 'react';

function CommentBar() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="comment-bar">
      <h3>Comments</h3>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your comment here..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button onClick={handleSubmitComment}>Submit</button>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentBar;

