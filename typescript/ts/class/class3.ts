{
    class Employee {
        //get-set 
        private _fullName: string;
        //C# Style
        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            this._fullName = newName;
        }
    }
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}