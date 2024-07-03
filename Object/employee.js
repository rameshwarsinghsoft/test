let employees = {
    employeeData: [
        { name: "Rameshwar", age: 30, city: "Jaipur" },
        { name: "Jyoti", age: 30, city: "Agar" }
    ],
    state: "Madhya Pradesh"
}

let name = [];
let age = [];
let city = [];
let state = []
for (const employee in employees) {
    console.log(employees[employee])
    if (employee === 'employeeData') {
        employees[employee].forEach(element => {
            name.push(element.name)
            age.push(element.age)
            city.push(element.city)
        });
    } else if (employee === 'state') {
        state.push(employees[employee]);
    }

}

console.log("name :", name)
console.log("age :", age)
console.log("city :", city)
console.log("state :", state)