import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const List = (props) => {
    const handleClick = (e) => {
        const title = e.target.innerHTML;
    }
    
    return (
        <ul className="list-group list-group-flush">
            {props.todos.map(todo => (
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
    return { 
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
