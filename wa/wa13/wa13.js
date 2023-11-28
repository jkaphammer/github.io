// Problem 1
employees = [
    {
        "first_name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise_eligible": true
    },
    {
        "first_name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise_eligible": true
    },
    {
        "first_name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise_eligible": false
    }
];
// console log prob 1
console.log("PROBLEM 1: ");
for (var i = 0; i < employees.length; i++) {
    console.log("Employee Details:");
    console.log("Name: " + employees[i].first_name);
    console.log("Department: " + employees[i].department);
    console.log("Designation: " + employees[i].designation);
    console.log("Salary: " + employees[i].salary);
    console.log("Raise Eligible: " + employees[i].raise_eligible);
}
// Problem 2
company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
};
// console log problem 2
console.log("PROBLEM 2: ");
console.log("Company data: " + company.companyName + ", " + company.website);
for (var i = 0; i < company.employees.length; i++) {
    console.log("Employee Details:");
    console.log("Name: " + company.employees[i].first_name);
    console.log("Department: " + company.employees[i].department);
    console.log("Designation: " + company.employees[i].designation);
    console.log("Salary: " + company.employees[i].salary);
    console.log("Raise Eligible: " + company.employees[i].raise_eligible);
}
// Problem 3
company.employees.push({
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
});
// console log problem 3 that shows Anna is added to object with other
console.log("PROBLEM 3: ");
for (var i = 0; i < company.employees.length; i++) {
    console.log("Employee Details:");
    console.log("Name: " + company.employees[i].first_name);
    console.log("Department: " + company.employees[i].department);
    console.log("Designation: " + company.employees[i].designation);
    console.log("Salary: " + company.employees[i].salary);
    console.log("Raise Eligible: " + company.employees[i].raise_eligible);
}

// Problem 4
let totalSalary = 0;
for (var i = 0; i < company.employees.length; i++){
    totalSalary += company.employees[i].salary;
}
// console log prob 4
console.log("PROBLEM 4: ");
console.log("Total salary: " + totalSalary);
// Problem 5
function raiseFunction(){
    for (var n = 0; n < company.employees.length; n++){
        if (company.employees[n].raise_eligible == true){
            // if they are eligible, raise their salary by 10%
            company.employees[n].salary = Math.round(company.employees[n].salary * 1.10);
            // rounds to avoid weird stuff with floats just incase
        }
    }
}
// prob 5 console log
    raiseFunction();
    console.log("PROBLEM 5: ");
    console.log("Updated Salaries after Raise:");
    for (var i = 0; i < company.employees.length; i++) {
        console.log(company.employees[i].first_name + ": $" + company.employees[i].salary);
    }

// Problem 6
for (var j = 0; j < company.employees.length; j++){
    if (company.employees[j].first_name === "Anna" || company.employees[j].first_name === "Sam"){
        company.employees[j].work_from_home = true;
    }
    else{
        company.employees[j].work_from_home = false;
    }
}
// console log problem 6
console.log("PROBLEM 6: ");
for (var i = 0; i < company.employees.length; i++){
    console.log(company.employees[i].first_name);
    console.log("Working from home: " + company.employees[i].work_from_home);
    console.log("-------------------------");
}

// TEST CONSOLE LOGS
// for (var i = 0; i < employees.length; i++) {
//     console.log("Employee Details:");
//     console.log("Name: " + employees[i].first_name);
//     console.log("Department: " + employees[i].department);
//     console.log("Designation: " + employees[i].designation);
//     console.log("Salary: " + employees[i].salary);
//     console.log("Raise Eligible: " + employees[i].raise_eligible);
//     console.log("Work from home?: " + employees[i].work_from_home);
//     console.log("-------------------------");
// }

// console.log("Total Salary: " + totalSalary);