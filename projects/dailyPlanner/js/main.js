$(document).ready(function() {

    //AddTask Event
    $('#add-task-form').on('submit', function(e){
        addTask(e);
    });

    //Edit Event
    $('#edit-task-form').on('submit', function(){
        updateTask;
    })

    displayTasks();

    //Function to display Tasks
    function displayTasks(){
        var taskList =  JSON.parse(localStorage.getItem('tasks'));

        //Sort tasks
        if(taskList != null){
            taskList = taskList.sort(sortByTime);
        }

        // Set counter
        var i = 0;
        //check Tasks
        if(localStorage.getItem('tasks') != null){
            //loop through and displayTasks
            $.each(taskList, function(key,value){
                $('#task-table').append(
                '<tr id="'+ value.id +'">' +
                '<td>' + value.task + '</td>' +
                '<td>' + value.task_priority + '</td>' +
                '<td>' + value.task_date + '</td>' +
                '<td>' + value.task_time + '</td>' +
                '<td><a href="edit.html?id='+ value.id +'">Edit</a> | <a href="#" id="remove-task">Remove</a></td>' +
                '</tr>');
            })
        }
    }

    //function to sort text
    function sortByTime(a, b) {
        var aTime = a.task_time;
        var bTime = b.task_time;
        return ((aTime < bTime) ? -1 : ((aTime > bTime) ? 1 : 0));
    }

    //Function to add a Task
    function addTask(e){
        // Addunick // ID
        var newDate = new Date();
        id = newDate.getTime();

        var task = $('#task').val();
        var task_priority = $('#priority').val();
        var task_date = $('#date').val();
        var task_time = $('#time').val();

        // Simple validation
        if(task == ''){
            alert('Task is required');
            e.preventDefault();
        } else if(task_date ==''){
            alert('Date is required');
            e.preventDefault();
        } else if(task_time ==''){
            alert('Time is required');
            e.preventDefault();
        } else if(task_priority ==''){
            task_priority = 'normal';
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));

            //Check Tasks
            if(tasks == null) {
                tasks = [];
            }

            var taskList = JSON.parse(localStorage.getItem('tasks'));

            //New task object
            var new_task = {
                "id": id,
                "task": task,
                "task_priority": task_priority,
                "task_date": task_date,
                "task_date": task_time
            }

            tasks.push(new_task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            console.log('Tas Added');
        }
    }
});

//function for getting single tasks
function getTask() {
    var $_GET = getQueryParams(document.location.search);
    id = "$_GET['id']";

    var taskList = JSON.parse(localStorage.getItem('tasks'));

    for(var i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id) {
            $('#edit-task-form #task_id').val(taskList[i].id);
            $('#edit-task-form #task').val(taskList[i].task);
            $('#edit-task-form #priority').val(taskList[i].task_priority);
            $('#edit-task-form #date').val(taskList[i].task_date);
            $('#edit-task-form #time').val(taskList[i].task_time);
        }
    }
}

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
        }
}
