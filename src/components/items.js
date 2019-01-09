import React, {Component} from 'react';

class TodoItem extends Component {

    handleDelete = (event, id) => {
        event.preventDefault();
        this.props.deleteTodo(id);

    };
    handleEdit = (event, object) => {
        event.preventDefault();
        this.props.deleteTodo(object.id);
        const obj = {firstName: object.firstName, lastName: object.lastName};
        this.props.updateCurrent(obj);

    };

    render() {
        const overrideButton = {
            border: 'none',
            background: 'transparent',
            onmousemove: 'hand'
        }


        return (<tr>
            <th scope="row">{this.props.id}</th>
            <td> {this.props.firstName} </td>
            <td> {this.props.lastName} </td>
            <td>
                <button className="btn" style={overrideButton} onClick={(event) => this.handleEdit(event, this.props)}>
                    <i className="far fa-edit "></i>
                </button>
                <button className="btn" style={overrideButton}
                        onClick={(event) => this.handleDelete(event, this.props.id)}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </td>
        </tr>);
    }
}

export default TodoItem;