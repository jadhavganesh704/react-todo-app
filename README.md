# react-todo-app
Todo Application You have to build a simple todo-application with certain features listed in the following sections.    Fields which should be there in Todo Task  Field name Description UI​ ​Element Validations (if any)  CurrentState State of the task, open or done  None By default all tasks will be set to Pending.  Title One line summary of a task  Text input Max-length: 140 Chars Min-length: 10 Chars Accept: all Description Detail of the task Textarea Max-length: 500 chars Min-length: 10 chars Accept: all CreatedAt Timestamp when the task is created None Should be auto-filled based on current timestamp DueDate Target completion date and time Datepicker Time is optional Priority Priority of the tasks Dropdown None/Low/Medium/High    Components on the page 1. Add a task button​: A composer button, which we usually see at the bottom right corner of any application. The text of the button should be a plus symbol (+). For reference, see the gmail app. A modal will open with add-task-form. 2. Adding a task (​add-task-form ​ )​: Clicking on the + button should open a modal. A modal will have abovee mentioned fields. Use the following design for displaying the form inside the modal. Add validation on fields as mentioned in above table. By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.  By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.      3. ​Tabs​: The page should contain 3 tabs i. All tasks​: this tab will contain all the tasks. ii. Completed​: this tab will contain only completed tasks. iii. Pending​: this tab will contain only pending tasks. 4. ​List view of the tasks​: The content of each tab will be a list of tasks with the following columns Summary | Priority | Created On | Due Date | Actions Click on the task row. The modal should open read only view of ​add-task-form ​ with all fields filled in it.  5. ​Actions​: Icons for edit, delete, and close/open the task. See later sections for the description of these actions. To edit a task, click on the edit icon available in the Actions column of a row.   1. When a user clicks on the edit icon, a modal will open with add-task-form. The values of the current task will be prefilled in the form. 2. To delete a task, click on the delete icon available in the Actions column of a row. When a user clicks on the delete icon, a modal will open with the task summary.  The modal will also contain a question for the user: “Do you want to delete this task?”, with “Yes” and “No” action buttons. 3. Click the done button available in the Actions should so following things a. In the “All tasks” lists, the style of the task should change. E.g. make the background green, or put a strikethrough in the row. b. The “done” button should change to “re-open” in the actions column. c. A copy of task should be moved to “Completed” tab.    6. ​Search​: A text box to allow users to search within the page. 7. ​Group By dropdown​: A dropdown to allow the current tab’s list to be grouped by the selected item.    Sorting and Searching  Sorting  ● If a column is sortable (see the structure/configuration), clicking on the column header should sort the list based on that column. ● If you are considering ASC as default, the first click should sort the list in ascending order. ● If the user clicks on the column header again, the order should become descending. ● Subsequent clicks on the column header should alternate the sorting order.  Searching ● If a user starts to type in the “Search” text input, perform a search on the page with the given keyword. ● Filter Task according to searched text ● The search should be case-insensitive.    Group By ● The dropdown will contain list of attributes for which “Allow group by” has the value yes.  ● As per above mentioned structure, the group by drop down should contain ○ None ○ Created On ○ Pending On ○ Priority.  Sample: If the user selects Priority from the dropdown, the list should become like the following:   
