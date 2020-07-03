import React from 'react';
import TaskList from '../task-list'
import getTodoListData from '../todo-list-api';
import TaskModal from '../task-modal';
import './search-bar.css';

class SearchBar extends React.Component {
    state = {
        startDate: new Date(),
        ismodal: false,
        readOnly: false,
        task: [],
        todolistData: getTodoListData,
        searchData: [],
    };

    setDate = date => {
        let today = date ? new Date(date) : new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; // January is 0!
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        if (mm < 10) {
            mm = `0${mm}`;
        }

        today = `${yyyy}-${mm}-${dd}`;
        return today;
    };

    handleDelete = (id) => {
        const { todolistData } = this.state;
        if (todolistData.length > 1) {
            const index = todolistData.findIndex(item => item.id === id);
            this.setState({
                ...todolistData.splice(index, 1),
            })
        }
    }

    handleAction = (id) => {
        const { todolistData } = this.state;
        const index = todolistData.findIndex(item => item.id === id);
        this.setState({
            ...todolistData[index].status = 3,
        })
    }

    handleModal = (id, readOnly, summary, description, priority, dueDate, status) => {
        const { ismodal, todolistData } = this.state;
        this.setState({
            ismodal: !ismodal,
            readOnly: readOnly ? readOnly : false,
            task: id ? todolistData.filter((item) => item.id === id) : [],
        })
        if (summary) {
            if (id) {
                const index = todolistData.findIndex(item => item.id === id);
                todolistData[index].summary = summary;
                todolistData[index].description = description;
                todolistData[index].priority = priority;
                todolistData[index].dueDate = this.setDate();
            } else {
                const newtask = {
                    "id": todolistData && todolistData[todolistData.length - 1].id + 1,
                    "summary": summary,
                    "description": description,
                    "priority": priority,
                    "createdOn": this.setDate(dueDate),
                    "dueDate": this.setDate(),
                    "status": status,
                }
                todolistData.push(newtask);
            }
        }
    }

    handleSearch = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    render() {
        return (
            <div>
                {/* model of Edit/ Add todo task */}
                {this.state.ismodal && <TaskModal handleModal={this.handleModal} task={this.state.task} readOnly={this.state.readOnly} />}
                {/* Header */}
                {/* <form className="ui massive form">
                    <div className="fields">
                        <label>ToDo App</label>
                        <i className="mini circular inverted blue plus icon" onClick={() => this.handleModal()}></i>
                    </div>
                </form> */}
                <div className="ui grid">
                    <div className="left floated two wide column">
                        <div className="title">ToDo App</div>
                    </div>
                    <div className="right floated two wide column">
                        <i className="small circular inverted blue plus icon" onClick={() => this.handleModal()}></i>
                    </div>
                </div>
                {/* group by and search bar*/}

                <form className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>Group By</label>
                            <select className="ui fluid dropdown">
                                <option value="">None</option>
                                <option value="Created On">Created On</option>
                                <option value="Pending On">Pending On</option>
                                <option value="Priority">Priority</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Search</label>
                            <input id="myInput" type="text" name="Search-Tasks" placeholder="Search Tasks" onChange={this.handleSearch} />
                        </div>
                    </div>
                </form>
                {/* todo list*/}
                <TaskList data={this.state.todolistData} handleModal={this.handleModal} handleAction={this.handleAction} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

export default SearchBar;