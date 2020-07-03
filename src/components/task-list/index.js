import React from 'react';
import DeleteTaskModal from '../delete-task-modal';
import './task-list.css'

class ToDoList extends React.Component {
    state = {
        status: 1,
        todolist: this.props.data,
        task: null,
        isSummary: false,
        isPriority: false,
        isCreatedOn: false,
        isDueDate: false,
    }

    handleTab = (status) => {
        this.setState({
            status,
            todolist: status !== 1 ? this.props.data.filter((item) => item.status === status) : this.props.data,
        });
    }
    handleDelete = (id) => {
        this.setState({
            task: null
        })
        if (id) {
            this.props.handleDelete(id)
        }
    }

    // compare = (a, b) => {
    //     const priorityA = a.priority.toUpperCase();
    //     const priorityB = b.priority.toUpperCase();
      
    //     let comparison = 0;
    //     if (priorityA > priorityB) {
    //       comparison = 1;
    //     } else if (priorityA < priorityB) {
    //       comparison = -1;
    //     }
    //     return comparison;
    //   }
    render() {
        // console.log("before", this.state.todolist);
        // console.log("after", this.state.todolist.sort(this.compare));
        return (
            <div>
                {this.state.task && <DeleteTaskModal handleDelete={this.handleDelete} task={this.state.task} />}
                <form className="ui form">
                    <div className="ui top attached tabular menu">
                        <div className={`${this.state.status === 1 && 'active'} item`} onClick={() => this.handleTab(1)}>All</div>
                        <div className={`${this.state.status === 2 && 'active'} item`} onClick={() => this.handleTab(2)}>Pending</div>
                        <div className={`${this.state.status === 3 && 'active'} item`} onClick={() => this.handleTab(3)}>Completed</div>
                    </div>
                    <div className="ui bottom attached active tab segment">
                        <table id="myTable" className="ui sortable celled table">
                            <thead>
                                <tr>
                                    <th className={`sorted ${this.state.isSummary ? 'descending' : 'ascending'}`} onClick={() => this.setState({ isSummary: !this.state.isSummary})}>Summary</th>
                                    <th className={`sorted ${this.state.isPriority ? 'descending' : 'ascending'}`} onClick={() => this.setState({ isPriority: !this.state.isPriority})}>Priority</th>
                                    <th className={`sorted ${this.state.isCreatedOn ? 'descending' : 'ascending'}`} onClick={() => this.setState({ isCreatedOn: !this.state.isCreatedOn})}>Created On</th>
                                    <th className={`sorted ${this.state.isDueDate ? 'descending' : 'ascending'}`} onClick={() => this.setState({ isDueDate: !this.state.isDueDate})}>Due Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.todolist && this.state.todolist.map((item) => (
                                    <tr key={item.id}>
                                        <td onClick={() => this.props.handleModal(item.id, true)}>{item.summary}</td>
                                        <td onClick={() => this.props.handleModal(item.id, true)}>{item.priority}</td>
                                        <td onClick={() => this.props.handleModal(item.id, true)}>{item.createdOn}</td>
                                        <td onClick={() => this.props.handleModal(item.id, true)}>{item.dueDate}</td>
                                        <td>
                                            <i className="bordered inverted blue edit outline icon" onClick={() => this.props.handleModal(item.id)}></i>
                                            <div className={`small ui ${item.status === 2 ? 'green' : 'teal'} button`} onClick={() => this.props.handleAction(item.id)} >{item.status === 1 ? 'Open' : item.status === 2 ? 'Done' : 'Re-Open'}</div>
                                            <i className="bordered inverted red trash alternate outline icon" onClick={() => this.setState({ task: item })}></i>
                                        </td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td colSpan="5" className="ui center aligned">High </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}

export default ToDoList;