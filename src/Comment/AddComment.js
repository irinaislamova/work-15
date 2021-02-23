import React, {useState} from 'react';

function AddComment({onCreate}) {
	const [value, setValue] = useState('');
	const [author, setAuthor] = useState('');
	function submitHandler(event) {
		event.preventDefault();		
		if (value.trim() && author.trim()) {
			onCreate(value, author)
			setValue('')
			setAuthor('')
		}
	}
	return (
		<form className="post_form"
		       onSubmit={submitHandler}>
		<input className="post_addAuthor"
		       placeholder="Enter your name"
		       value={author}
		       onChange = {event => setAuthor(event.target.value)}
		/>
		<br /> 		
		<input 
		    placeholder="Enter comment"
		    value = {value}
		    onChange = {event => 
		    	setValue(event.target.value)}
		/>
		<button type="submit" className="post_button">Add comment</button>
		</form>
	)
}

export default AddComment;