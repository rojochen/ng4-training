abstract class Department {
        constructor(public name: string) {
        }
    
        printName(): void {
            console.log("Department name: " + this.name);
        }
        abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    
        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }
        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
    
        generateReports(): void {
            console.log("Generating accounting reports...");
        }
}

let department: Department; // 宣靠abstract的型別
//department = new Department(); // 錯誤: abstract class 無法被new
department = new AccountingDepartment(); // new concrete class
department.printName();
department.printMeeting();
//department.generateReports(); // error: 以宣告類別為主