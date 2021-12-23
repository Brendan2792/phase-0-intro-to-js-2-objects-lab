const employee = {
    name: "Bob",
    streetAddress: "15 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployeeWithKeyAndValue = {...employee}
    updateEmployeeWithKeyAndValue[key] = value
    return updateEmployeeWithKeyAndValue
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}