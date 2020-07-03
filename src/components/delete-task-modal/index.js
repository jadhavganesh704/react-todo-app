import React from 'react';

const DeleteTaskModal = (props) => {
    return (
        <div className="ui active tiny modal">
            <div className="header">{props.task.summary}</div>
            <div className="content">
                <label>Do you want to delete this task?</label>
            </div>
            <div className="actions">
                <div className="ui button" onClick={() => props.handleDelete()}>No</div>
                <div className="ui positive button" onClick={() => props.handleDelete(props.task.id)}>Yes</div>
            </div>
        </div>
    )
}

export default DeleteTaskModal;