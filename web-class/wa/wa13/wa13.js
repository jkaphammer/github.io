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
console.log(employees);
// for (var i = 0; i < employees.length; i++) {
//     console.log("Employee Details:");
//     console.log("Name: " + employees[i].first_name);
//     console.log("Department: " + employees[i].department);
//     console.log("Designation: " + employees[i].designation);
//     console.log("Salary: " + employees[i].salary);
//     console.log("Raise Eligible: " + employees[i].raise_eligible);
// }
// Problem 2
company1 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
};
// console log problem 2
console.log("PROBLEM 2: ");
console.log(company1);
// console.log("Company data: " + company.companyName + ", " + company.website);
// for (var i = 0; i < company.employees.length; i++) {
//     console.log("Employee Details:");
//     console.log("Name: " + company.employees[i].first_name);
//     console.log("Department: " + company.employees[i].department);
//     console.log("Designation: " + company.employees[i].designation);
//     console.log("Salary: " + company.employees[i].salary);
//     console.log("Raise Eligible: " + company.employees[i].raise_eligible);
// }
// Problem 3
// employees2 = [
//     {
//         "first_name": "Sam",
//         "department": "Tech",
//         "designation": "Manager",
//         "salary": 40000,
//         "raise_eligible": true
//     },
//     {
//         "first_name": "Mary",
//         "department": "Finance",
//         "designation": "Trainee",
//         "salary": 18500,
//         "raise_eligible": true
//     },
//     {
//         "first_name": "Bill",
//         "department": "HR",
//         "designation": "Executive",
//         "salary": 21200,
//         "raise_eligible": false
//     }
// ];
employees2 = [
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
company2 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees2
};

company2.employees.push({
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
});
// console log problem 3 that shows Anna is added to object with other
console.log("PROBLEM 3: ");
console.log(company2);
// for (var i = 0; i < company.employees.length; i++) {
//     console.log("Employee Details:");
//     console.log("Name: " + company.employees[i].first_name);
//     console.log("Department: " + company.employees[i].department);
//     console.log("Designation: " + company.employees[i].designation);
//     console.log("Salary: " + company.employees[i].salary);
//     console.log("Raise Eligible: " + company.employees[i].raise_eligible);
// }

// Problem 4
company3 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees2
}
let totalSalary = 0;
for (var i = 0; i < company3.employees.length; i++){
    totalSalary += company3.employees[i].salary;
}
// console log prob 4
console.log("PROBLEM 4: ");
console.log("Total salary: " + totalSalary);
// Problem 5
function raiseFunction(){
    for (var n = 0; n < company3.employees.length; n++){
        if (company3.employees[n].raise_eligible == true){
            // if they are eligible, raise their salary by 10%
            company3.employees[n].salary = Math.round(company3.employees[n].salary * 1.10);
            // rounds to avoid weird stuff with floats just incase
        }
    }
}
// prob 5 console log
    raiseFunction();
    console.log("PROBLEM 5: ");
    console.log(company3.employees);
    // console.log("Updated Salaries after Raise:");
    // for (var i = 0; i < company.employees.length; i++) {
    //     console.log(company.employees[i].first_name + ": $" + company.employees[i].salary);
    // }

// Problem 6
for (var j = 0; j < company3.employees.length; j++){
    if (company3.employees[j].first_name === "Anna" || company3.employees[j].first_name === "Sam"){
        company3.employees[j].work_from_home = true;
    }
    else{
        company3.employees[j].work_from_home = false;
    }
}
// console log problem 6
console.log("PROBLEM 6: ");
console.log(company3.employees);
// for (var i = 0; i < company3.employees.length; i++){
//     console.log(company3.employees[i].first_name);
//     console.log("Working from home: " + company3.employees[i].work_from_home);
//     console.log("-------------------------");
// }

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