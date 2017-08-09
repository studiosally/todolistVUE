new Vue({
	el:'#toDoRoot',
	data:{
		title:{
			taskList: 'To do List',
			completedTasks: 'Completed Tasks'
		},
		tasks: [
			{ description: "do excersice", completed: false },
			{ description: "Homework", completed: false },
			{ description: "Vue lesson", completed: false },
			{ description: "Clean the house", completed: false },
			{ description: "go to yoga", completed: false },
			{ description: "buy some new records", completed: false },
		],
		editTaskIndex: -1
	},
	methods:{
		addTask(){
			this.tasks.push({description: this.$refs.newTask.value , completed: false});
			this.$refs.newTask.value = '';

			toastr.success('New task added to your list!')
			
		},

		deleteTask(index){
			this.tasks.splice(index,1);
			toastr.error('Task deleted!');
		},
		edited(){
			toastr.success('Task updated!')
		}
	},
	computed: {
	
		completeTasks: function(){
			return this.tasks.filter( task =>  task.completed );
		}
	}

});