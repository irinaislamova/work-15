import React from 'react';
import Context from './context';
import CommentList from './Comment/CommentList';
import AddComment from './Comment/AddComment';


function Post() {
	const [comments, setComments] = React.useState([
        {id: 1, author: 'author1', text: 'Adipisicing elit. Nemo, dicta'},
        {id: 2, author: 'author2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam?'},
        {id: 3, author: 'author3', text: 'Consequuntur optio ducimus cum doloremque quidem!'}
    ])

    function removeComment(id) {
    	setComments(comments.filter(comment => comment.id !== id) )
    }

    function addComment(text, author) {
    	setComments(
    		comments.concat([
    		    {
    		    	id: Date.now(),
    		    	author: author,
    		    	text: text,
    		    }
    		])
    	)
    }

    return (
    	<Context.Provider value={{removeComment: removeComment}}>
    	    <div className="wrapper">
    	        <h1>Post title</h1>
    	        <p className="post_text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. 
    	        Molestiae sapiente illo quidem voluptas, reiciendis pariatur 
    	        similique modi alias exercitationem commodi animi, quod iste 
    	        quam explicabo perferendis esse. Architecto, quia, et.
    	        </p>
    	        <AddComment onCreate={addComment}/>
    	        <CommentList comments={comments}/>
    	    </div>
    	</Context.Provider>
    	)
}

export default Post;