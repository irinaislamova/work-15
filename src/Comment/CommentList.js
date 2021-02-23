import React from 'react';
import Comment from './Comment';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function CommentList(props) {
	return (
		<ul style={styles.ul}>
		    {props.comments.map((comment, index) => {
		    	return <Comment 
		    	          comment={comment}
		    	          key={comment.id}
		    	          index={index}		    	          
		    	       />
		    })}

		</ul>

	)
}

export default CommentList;