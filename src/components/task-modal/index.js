import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            startDate: new Date(),
            summary: '',
            description: '',
            priority: '',
            status: 1,
        };
    }

    componentWillMount() {
        const { status, id, dueDate, summary, description, priority } = this.props.task && this.props.task.length > 0 && this.props.task[0];
        if (this.props.task && this.props.task.length > 0) {
            this.setState({
                id,
                startDate: new Date(dueDate),
                summary,
                description,
                priority,
                status,
            })
        }
    }

    handleSubmit = () => {
        this.props.handleModal(this.state.id, this.props.readOnly, this.state.summary, this.state.description, this.state.priority, this.state.startDate, this.state.status);
    }
    render() {
        return (
            <div className="ui active modal">
                <div className="header">Edit Task</div>
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Summary</label>
                            <input
                                type="text"
                                name="Summary"
                                placeholder="Summary"
                                maxLength="140"
                                minLength="10"
                                readOnly={this.props.readOnly}
                                value={this.state.summary}
                                onChange={e => this.setState({ summary: e.target.value })}
                            />
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea
                                name="Description"
                                rows="3"
                                placeholder="Description"
                                maxLength="500"
                                minLength="10"
                                readOnly={this.props.readOnly}
                                value={this.state.description}
                                onChange={e => this.setState({ description: e.target.value })}
                            />
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Due Date</label>
                                <DatePicker
                                    dateFormat="dd-MM-yyyy"
                                    readOnly={this.props.readOnly}
                                    selected={this.state.startDate}
                                    onChange={date => this.setState({ startDate: date })}
                                />
                            </div>
                            <div className="field">
                                <label>Priority</label>
                                <select className="ui fluid dropdown" disabled={this.props.readOnly} value={this.state.priority} onChange={e => this.setState({ priority: e.target.value })}>
                                    <option value="">None</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="actions">
                    <div className="ui button" onClick={() => this.props.handleModal()}>Cancel</div>
                    <div className={`ui ${this.props.readOnly && 'disabled'} positive button`} onClick={() => !this.props.readOnly && this.handleSubmit()}>Save</div>
                </div>
            </div>
        )
    }
}

export default TaskModal;