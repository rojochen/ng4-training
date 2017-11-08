class Person{
    constructor(name){
        this.name = name;
    }
    sleep(){
        console.log(this.name +" sleep");
    }

}
theMan();
var thePerson = ()=> {
    let person = new Person("James")
    person.sleep();
}
thePerson();