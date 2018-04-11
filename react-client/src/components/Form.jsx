import React from 'react';
import { connect } from 'react-redux'; // connect wraps our componenets to give it access to the store
import { bindActionCreators } from 'redux'; // bindActionCreators is useful in binding actionCreator functions to the dispatch object
import { addToDo } from '../actions/'; // import all the actions a component might need
import uuidv4 from "uuid";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''        
        }
    }
    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        let id = uuidv4();
        this.props.addToDo(id, title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                    />
                </div >
                <button onClick={this.handleSubmit.bind(this)} className="btn btn-success btn-lg">
                Add To-Do
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => { // use this function to map whichever pieces of state you need to the component's props
    return { };
}

const mapDispatchToProps = dispatch => { // use this function to actually connect the action creators to dispatch
    return bindActionCreators({ addToDo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form); // connect is what actually makes mapstatetoprops and mapdispatch to props have access to the redux store