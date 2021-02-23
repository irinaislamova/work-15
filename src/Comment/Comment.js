import React, { useContext } from 'react';
import Context from '../context';

function Comment({comment}) {	
	const {removeComment} = useContext(Context);
	return (
		<li className="post_comment">
		    <div className="post_comment-block">   
		        <div className="comment-block">        
                    <span className="post_comment-author">{comment.author}</span>
                    <span className="post_comment-time">{comment.time}</span>
                </div>		        
		        <span className="post_comment-text">{comment.text}</span>
		    </div>
		    <button className="rm"
		        onClick={() => removeComment(comment.id)}>
		            &times;
		    </button>
		</li>
	)

}

export default Comment;