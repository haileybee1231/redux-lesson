import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDo } from '../actions/';
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
                SAVE
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return { };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToDo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);