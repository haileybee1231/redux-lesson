import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const todos = [{id: 1, title: 'Learn Redux'}];

const ConnectedList = (props) => {
    const handleClick = (e) => {
        const title = e.target.innerHTML;
    }
    
    return (
        <ul className="list-group list-group-flush">
            {todos.map(todo => (
                <li className="list-group-item" key={todo.id}
                    onClick={handleClick}
                    >
                    {todo.title}
                </li>
            ))}
        </ul>
    )
};

const mapStateToProps = (state) => {
return { };
}

const mapDispatchToProps = (dispatch) => {
return { removeToDo: title => dispatch(removeToDo(title)) }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
