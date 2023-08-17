import { EmployeeDetails, Gender, AdditionalMethodforAge } from "./employee-model";

export class Employee {

    private id = 1001;
    employeeList: Map<number, EmployeeDetails>;
    uniqueEmpList: Map<string, EmployeeDetails>;

    constructor() {
        this.employeeList  = new Map<number, EmployeeDetails>(); 
        this.uniqueEmpList = new Map<string, EmployeeDetails>();
    }

    private *idGenerator(): Generator {
        yield this.id++;
    }

    addEmployee(name:string, gender: Gender, age: number): void {
        let empId = this.idGenerator().next().value;
        if (this.employeeList.has(empId)) {
            console.log('Employee already exists');
        } else {
            this.employeeList.set(empId, {id: empId, name, gender, age});
            console.log('employee added', this.employeeList.get(empId));
        }
    }

    getEmployeeDetails(id: number): EmployeeDetails | undefined {
        return this.employeeList.get(id);
    }

    removeEmployee(id: number) {
        if (this.employeeList.delete(id)) {
            console.log(`Employee with ID${id} removed from list`);
        } else {
            console.log(`Employee with ID${id} not found`);
        }
    }

    getAllEmployees() {
        return this.employeeList.values();
    }

    updateEmployeeDetails(id: number, name: string, gender: Gender, age: number) {
        if(this.employeeList.has(id)) {
            this.employeeList.set(id,{id,name,gender,age});
            console.log(`Employee ID${id} details updated to ${JSON.stringify(this.employeeList.get(id))}`);
        } else {
            console.log(`Employee with ID${id} not found`);
        }
    }

    createEmpInBulk(num: number): Promise<EmployeeDetails[]> {
        let empList: EmployeeDetails[] = [];
        while(num !== 0) {
            const id = this.idGenerator().next().value;
            const name = 'Emp'+ id;
            const gender = ((num % 2 === 0) ? 'Female' : 'Male') ?? 'Choose not to specify';
            const age = 30;
            this.employeeList.set(id,{id, name, gender, age});
            empList.push({id, name, gender, age});
            num--;
        }
        return new Promise((resolve) => {
            setTimeout(() => resolve(empList));
        });
    }

    getEmpUniqueNames() {
        this.employeeList.forEach(emp => {
            this.uniqueEmpList.set(emp.name, emp);
        });
        return this.uniqueEmpList.entries();
    }

    getEmpAboveAge(id: number): AdditionalMethodforAge | undefined {
        const emp  = this.getEmployeeDetails(id);
        if (emp?.age! > 40) {
            return {yearsLeft : this.getEmpYearsLeft};
        }
    }

    private getEmpYearsLeft(): void {
        console.log('Emp above 40');
    }

}