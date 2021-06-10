import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const completedTodos = useSelector((state) => 
	state.todos.filter((todo)=> todo.completed === true)
	);
	return (
		<div>
		<h4 className='mt-4 mr-1 text-right'>Nombres de taches finies : <span className="text-success">{completedTodos.length}</span></h4>
		</div>
	)
};

export default TotalCompleteItems;
