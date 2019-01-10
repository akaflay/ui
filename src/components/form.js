import React, {Component} from 'react'
import {connect} from 'react-redux';
import {updateCurrent, save, reset} from "../action/action";


class Form extends Component {

    componentDidMount() {
        this.firstName.value = '';
        this.lastName.value = '';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.firstName.value = this.props.current.firstName;
        this.lastName.value = this.props.current.lastName;
    }


    handleOnChange = () => {
        const person = {
            firstName: this.firstName.value,
            lastName: this.lastName.value
        };
        this.props.updateCurrent(person);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.save(this.props.current, this.props.count);
        this.resetForm();

    };
    resetForm = () => {
        this.firstName.value = '';
        this.lastName.value = '';
        this.firstName.focus();
        const person = {
            firstName: this.firstName.value,
            lastName: this.lastName.value
        };
        this.props.updateCurrent(person);
    };
    handleCancel = (event) => {
        event.preventDefault();
        this.resetForm();

    };
    getSubmitBtnClassName = () => {
        return ` btn ${(this.props.current.firstName.length <= 0 || this.props.current.lastName.length <= 0 ? 'btn-danger' : 'btn-success')}`;
    };
    enableCancelButton = () => {
        return (this.props.current.firstName.length >= 1 || this.props.current.lastName.length >= 1);
    };

    getCancelBtnClassName = () => {
        return `btn ${this.enableCancelButton() ? 'btn-success' : 'btn-danger'}`;
    };


    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" name="firstName"
                       ref={(c) => this.firstName = c}
                       value={this.firstName ? this.firstName.value : ''} onChange={this.handleOnChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input className="form-control" name="lastName"
                       ref={(c) => this.lastName = c}
                       value={this.lastName ? this.lastName.value : ''} onChange={this.handleOnChange}/>
            </div>
            <div className="bd-example">
                <button type="submit"
                        className={this.getSubmitBtnClassName()}
                        style={{margin: '1%'}}
                        onClick={this.handleSubmit} disabled={!this.props.current.firstName ||
                !this.props.current.lastName}>Submit
                </button>

                <button type="button"
                        className={this.getCancelBtnClassName()}
                        onClick={this.handleCancel} disabled={!this.enableCancelButton()}>Clear
                </button>
            </div>

        </form>);
    }
}

const mapDispatchToProps = {updateCurrent,  save, reset};
const mapStateToProp = (state) => ({current: state.current, count: state.lists.length, list: state.lists});
export default connect(mapStateToProp,
    mapDispatchToProps)(Form);

