import { Employee } from "./employee/employee";

const emp1 = new Employee();

//Adding Employees
emp1.addEmployee('Parul', 'Female', 26);
emp1.addEmployee('Sam', 'Male', 30);
emp1.addEmployee('Luke', 'Male', 41);
emp1.addEmployee('Aelin', 'Female', 28);
emp1.addEmployee('Josh', 'Male', 32);
emp1.addEmployee('Sam', 'Male', 42);

//Fetching Employee details with ID
const id = 1002;
const empDetails = emp1.getEmployeeDetails(id);
console.log(`Employee details for ID${id} - ${JSON.stringify(empDetails)}`);

//Deleting Employee using ID
emp1.removeEmployee(1005);

//Fetch all employees
const allEmp = emp1.getAllEmployees();
console.log('List of all employees:');
for (let emp of allEmp) {
    console.log(emp);
}

//Update Employee Details
emp1.updateEmployeeDetails(1002,'Sam','Male',24); //initially { id: 1005, name: 'Sam', gender: 'Male', age: 30 }

//Display dictionary containing employees with unique names
const empUniqueNames = emp1.getEmpUniqueNames();
console.log('Dictionary containing unique employee names:');
for(let emp of empUniqueNames) {
    console.log(emp);
}

//Async function to add n number of employees
async function createEmployees(num: number) {
    return await emp1.createEmpInBulk(num);
}
createEmployees(10).then(empList => {
    console.log('Employee created using async function:');
    empList.forEach(emp => console.log(emp));
});

//invoking method based on condition
emp1.getEmpAboveAge(1006)?.yearsLeft();




