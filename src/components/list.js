import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetch, updateCurrent, reset} from "../action/action";
import TodoItem from "./items"

import {removeSingle} from '../action/action'


class List extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.render();
    }

    handleDeleteAll = (event) => {
        event.preventDefault();
        this.props.resetTodos();
    }

    render() {
        const showContent = {
            display: 'inline-table',
            width: '100%'
        };
        const hideContent = {
            display: 'none'
        };

        return (

            <div>
                <div style={{marginBottom: '1%', float: 'right'}}>
                    <button className="btn btn-danger" style={this.props.count >= 1 ? showContent : hideContent}
                            onClick={this.handleDeleteAll}>
                        Delete all
                    </button>
                </div>

                <table className="table table-striped"
                       style={this.props.count >= 1 ? showContent : hideContent}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.props.todos.map((value) => {
                            return (<TodoItem updateCurrent={this.props.updateCurrent}
                                              deleteTodo={this.props.deleteTodo} key={value.id} {...value}/>);
                        })}
                    </tbody>


                </table>
                <div className="alert alert-danger" role="alert"
                     style={this.props.count === 0 ? showContent : hideContent}>
                    No item !!!
                </div>
            </div>

        );

    }
}

const mapStateToProp = (state) => ({todos: state.lists, count: state.lists.length});
const mapDispatchToProps = {fetchTodos: fetch, deleteTodo: removeSingle, updateCurrent, resetTodos: reset};
export default connect(mapStateToProp, mapDispatchToProps)(List);