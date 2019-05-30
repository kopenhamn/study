$(document).ready(function() {

    $('#add-task-form').on('submit', function(e) {
        addTask(e);
    })
})

function addTask(e) {
    let task = $('#task').val();
    let priority = $('#priority').val();
    let date = $('#date').val();
    let time = $('#time').val();

    if(task == '') {
        alert('task should be filled!');
        e.preventDefault();
    }
    else if(priority == '') {
        alert('priority should be filled!');
        e.preventDefault();
    }
    else if(date == '') {
        alert('date should be filled!');
        e.preventDefault();
    }
    else if(time == '') {
        alert('time should be filled!');
        e.preventDefault();
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

        if(tasks == null) {
            tasks = [];
        }
    }
}
