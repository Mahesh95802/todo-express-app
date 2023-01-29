const findIndexById = (id) => global.db.findIndex((task) => task.id === parseInt(id))

module.exports = { findIndexById }