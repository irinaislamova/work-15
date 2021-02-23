import React from 'react';
import Context from './context';
import CommentList from './Comment/CommentList';
import AddComment from './Comment/AddComment';


function App() {
	const [comments, setComments] = React.useState(
        localStorage.getItem('CommentList') ? JSON.parse(localStorage.getItem('CommentList') ) :
        [
            {id: 1, author: 'Author1', text: 'Adipisicing elit. Nemo, dicta', time: getTime() },
            {id: 2, author: 'Author2', text: 'Lorem ipsum dolor', time: getTime() },
            {id: 3, author: 'Author3', text: 'Consequuntur optio ducimus cum doloremque quidem!', time: getTime()}
        ]
    ) 

    function getTime() {
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        if (String(minute).length != 2) {
            minute = '0' + minute;
        }
        let day = d.getDate();
        let monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
           'сентября', 'октября', 'ноября', 'декабря'];
        let month = d.getMonth();
        let year = d.getFullYear();
        return day+' '+monthNames[month]+' '+year +', ' + hour + ':' + minute;
    }

    function removeComment(id) {
    	setCommentsWithSave(comments.filter(comment => comment.id !== id) )        
   }

    function addComment(text, author) {
    	setCommentsWithSave(
    		comments.concat([
    		    {
    		    	id: Date.now(),
    		    	author: author,
    		    	text: text,
                    time: getTime()
    		    }
    		])
    	)          
    }

    function setCommentsWithSave(newComments) {
        setComments(newComments);
        localStorage.setItem('CommentList', JSON.stringify(newComments));
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

export default App;