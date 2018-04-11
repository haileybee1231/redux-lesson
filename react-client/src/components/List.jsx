import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeToDo } from '../actions/';

const List = (props) => {
    const handleClick = (todo) => {
        props.removeToDo(todo);
    }

    const styles = {
        todo: {
            cursor: 'pointer'
        }
    }
    
    return (
        <ul className="list-group list-group-flush">
            {props.todos.map(todo => (
                <li className="list-group-item" key={todo.id}
                    onClick={() => handleClick(todo)}
                    style={styles.todo}
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
return bindActionCreators({ removeToDo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
