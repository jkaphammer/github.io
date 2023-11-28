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
// Problem 2
company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
};
// Problem 3
company.employees.push({
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
});
// Problem 4
let totalSalary = 0;
for (var i = 0; i < company.employees.length; i++){
    totalSalary += company.employees[i].salary;
}
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
// * IF you would like to see salary with raise, uncomment the below lines. *
    // raiseFunction();
    // console.log("Updated Salaries after Raise:");
    // for (var i = 0; i < company.employees.length; i++) {
    //     console.log(company.employees[i].first_name + ": $" + company.employees[i].salary);
    // }

// Problem 6
for (var j = 0; j < company.employees.length; j++){
    if (company.employees[j].first_name === "Anna" || company.employees[j].first_name === "Sam"){
        company.employees[j].work_from_home = true;
    }
    else{
        company.employees[j].work_from_home = false;
    }
}

// TEST CONSOLE LOGS
for (var i = 0; i < employees.length; i++) {
    console.log("Employee Details:");
    console.log("Name: " + employees[i].first_name);
    console.log("Department: " + employees[i].department);
    console.log("Designation: " + employees[i].designation);
    console.log("Salary: " + employees[i].salary);
    console.log("Raise Eligible: " + employees[i].raise_eligible);
    console.log("Work from home?: " + employees[i].work_from_home);
    console.log("-------------------------");
}
console.log("Company data: " + company.companyName + ", " + company.website);
console.log("Total Salary: " + totalSalary);