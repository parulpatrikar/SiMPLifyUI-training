import { Employee } from "./employee/employee";

const emp = new Employee();

//Adding Employees
emp.addEmployee('Parul', 'Female', 26);
emp.addEmployee('Sam', 'Male', 30);
emp.addEmployee('Luke', 'Male', 41);
emp.addEmployee('Aelin', 'Female', 28);
emp.addEmployee('Josh', 'Male', 32);
emp.addEmployee('Sam', 'Male', 42);

//Fetching Employee details with ID
const id = 1002;
const empDetails = emp.getEmployeeDetails(id);
console.log(`Employee details for ID${id} - ${JSON.stringify(empDetails)}`);

//Deleting Employee using ID
emp.removeEmployee(1005);

//Fetch all employees
const allEmp = emp.getAllEmployees();
console.log('List of all employees:');
for (let empdetails of allEmp) {
    console.log(empdetails);
}

//Update Employee Details
emp.updateEmployeeDetails(1002,'Sam','Male',24); //initially { id: 1002, name: 'Sam', gender: 'Male', age: 30 }

//Display dictionary containing employees with unique names
const empUniqueNames = emp.getEmpUniqueNames();
console.log('Dictionary containing unique employee names:');
for(let emp of empUniqueNames) {
    console.log(emp);
}

//Async function to add n number of employees
async function createEmployees(num: number) {
    return await emp.createEmpInBulk(num);
}
createEmployees(10).then(empList => {
    console.log('Employee created using async function:');
    empList.forEach(emp => console.log(emp));
});

//invoking method based on condition
const empYears = emp.getEmpAboveAge(1006);
empYears?.yearsLeft(1006);




