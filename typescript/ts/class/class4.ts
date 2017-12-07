//抽像class
abstract class Department {
        constructor(public name: string) {
        }
        printName(): void {
            console.log("Department name: " + this.name);
        }
        abstract printMeeting(): void; // 抽像function
}

class AccountingDepartment extends Department {
    
        constructor() {
            super("Accounting and Auditing"); // 呼叫父類別的建構子 
        }
        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
    
        generateReports(): void {
            console.log("Generating accounting reports...");
        }
}

let department: Department; // 宣告 abstract的型別
//department = new Department(); // 錯誤: abstract class 無法被建立實體
department = new AccountingDepartment(); // new concrete class
department.printName();
department.printMeeting();
//department.generateReports(); // error: 以宣告類別為主