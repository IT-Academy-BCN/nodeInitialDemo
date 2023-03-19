const firstQuestion ={
    type: 'input',
    name: 'name',
    message: "What's your  name",
}
const secondQuestion = {
    type: 'list',
    name: 'menu',
    message: 'What do you want to do?',
    choices: [
      'Create a new task',
      'Update a task',
      'Delete a task',
      'Show all tasks',
      'Show specific task',
      'Exit'
    ],
}

module.exports = {
    firstQuestion,
    secondQuestion
}