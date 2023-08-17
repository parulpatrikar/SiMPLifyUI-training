export interface EmployeeDetails {
    id: number;
    name: string;
    gender: Readonly<Gender>;
    age: number;
}

export interface AdditionalMethodforAge {
    yearsLeft: (id: number) => void;
}

export type Gender = 'Male' | 'Female' | 'Choose not to specify'