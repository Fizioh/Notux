import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleComplete, deleteTodo}  from '../redux/todoSlice';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleComplete({id: id, completed: !completed}))
	}
	const handleDeleteClick = () => {
		dispatch(deleteTodo({id: id}))
	}


	return (
		<li className={`list-group-item ${completed && 'list-group-item-success delete' }`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mr-5'
						checked={completed}
						onChange={handleCompleteClick}
						></input>
					{title}
				</span>
				<btn onClick={handleDeleteClick} className='btn '><i class="far fa-times-circle text-danger"></i></btn>
			</div>
		</li>
	);
};

export default TodoItem;
