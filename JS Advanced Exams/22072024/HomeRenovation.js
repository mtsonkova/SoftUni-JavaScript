class HomeRenovation {

    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask = (description, cost, priority) => {
        if (this.budget < Number(cost)) {
            return `Not enough budget to add '${description}' task.`
        }

        let task = {};
        task.description = description;
        task.cost = Number(cost);
        task.priority = Number(priority);

        this.tasks.push(task);
        this.budget -= task.cost;

        return `The task '${description}' has been successfully added to the renovation plan.`
    }

    markTaskAsCompleted = (description) => {
        const found = this.tasks.find((element) =>  element.description === description);

        if(found === undefined) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let index = this.tasks.indexOf(found);

        this.completedTasks.push(found);
        this.tasks.splice(index, 1);
        return `The task '${description}' has been successfully completed.`
    }

    getPriorityTasksCount = (minimalPriority) => {
        if(minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        } 

        if(this.tasks.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        let tasksCount = this.tasks.filter((element) => 
           element.priority >= minimalPriority);

        return `You have ${tasksCount.length} tasks to prioritize.`;
    }

    renovationSummary = () => {
        if(this.completedTasks.length === 0) {
            throw new Error(`No tasks have been completed yet!`);            
        } else {

            let output = `Budget left $${this.budget}.\nYou have completed ${this.completedTasks.length} tasks.\nPending tasks in the renovation plan:\n` 
            //console.log(`Budget left $${this.budget}.`);
            //console.log(`You have completed ${this.completedTasks.length} tasks.`);
            //console.log("Pending tasks in the renovation plan:");

            this.tasks.forEach(task => {
                output += `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}\n`;
            });

            return output;
        }
    }
}


const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());
