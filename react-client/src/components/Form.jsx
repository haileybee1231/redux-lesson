import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addToDo({ title, id });
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
                        onChange={this.handleChange}
                    />
                </div >
                <button type="submit" className="btn btn-success btn-lg">
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
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);