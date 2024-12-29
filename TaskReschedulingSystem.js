
let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
tasks.shift(); 
tasks.unshift("HighPriorityTask1", "HighPriorityTask2");

tasks[tasks.length - 1] = "NewTask";


console.log(tasks);