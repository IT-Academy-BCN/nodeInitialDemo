// Create Search by Id => Des d'una Array i un objId
const searchById = (dataInput, idInput) => dataInput.findIndex(task => task.taskId == idInput);

module.exports = searchById;