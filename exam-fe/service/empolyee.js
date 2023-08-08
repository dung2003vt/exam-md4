function findAllEmployee() {
    $.ajax({
        url: "http://localhost:8080/employees",
        type: "GET",
        success: function (data) {
            displayEmployee(data)
        }
    })
}
function displayEmployee(value){
    let content =`<h1 style="text-align: center">List Employee</h1>
                        
                        <button onclick="displayFormCreateEmployee()" class="btn btn-primary">Add new employee</button>
                        <button onclick="sortByAgeAsc()" class="btn btn-primary">Sort by age asc</button>
                        <table
                         class="table table-hover"> 
                        <tr><th style="width: 20%" >Code</th>
                        <th style="width: 20%">Name</th>
                        <th style="width: 10%">Age</th>
                        <th style="width: 10%">Salary</th>
                        <th style="width: 20%">Department</th>
                        <th colspan="2" style="text-align: center">Action</th></tr>`
    for (let i = 0; i < value.length; i++) {
        content += `<tr>
                    <th>${value[i].code}</th>
                    <th onclick="detailEmployee(${value[i].id})">${value[i].name}</th>
                    <th>${value[i].age}</th>
                    <th>${value[i].salary}</th>
                    <th>${value[i].branch.name}</th>
                    <th><button onclick="displayFormUpdateEmployee(${value[i].id})" class="btn btn-warning" >Update</button></th>
                    <th><button onclick="deleteEmployee(${value[i].id})" class="btn btn-danger">Delete</button></th>
                    </tr>
                   `
    }
    content += `</table>`
    document.getElementById("list_employee").innerHTML = content
    document.getElementById("list_employee").style.display = "block"
    document.getElementById("create_employee").style.display = "none"
    document.getElementById("update_employee").style.display = "none"
    document.getElementById("list_employee_views").style.display = "none"
}
function createEmployee() {
    let name = $("#name-c").val()
    let code = $("#code-c").val()
    let age = $("#age-c").val()
    let salary = $("#salary-c").val()
    let branchId = $("#branch-id").val()
    let employee = {
        name: name,
        code: code,
        age: age,
        salary: salary,
        branch: {
            id: branchId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/employees",
        type: "POST",
        data: JSON.stringify(employee),
        success: function () {
            findAllEmployee()
        }
    })
}

function detailEmployee(id) {
    $.ajax({
        url: `http://localhost:8080/employees/${id}`,
        type: "GET",
        success: function (data) {
            let content =`<div style="text-align: center"><h1>EmployeeDetail</h1>
                                       <h3>Name :${data.name}</h3>
                                       <p>Salary :${data.salary}</p>
                                         <p>Age :${data.age}</p>
                                       <span> Department : ${data.branch.name}</span><br>
                                        <button
                                            onclick="findAllEmployee()">Back to home</button
                                            </div>`
            document.getElementById("list_employee_views").innerHTML = content
            document.getElementById("list_employee_views").style.display = "block"
            document.getElementById("list_employee").style.display = "none"

        }
    })
}
function displayFormCreateEmployee(){
    getBranchCreate()
    document.getElementById("create_employee").style.display = "block"
    document.getElementById("list_employee").style.display = "none"
    document.getElementById("list_branch").style.display = "none"
}
function getBranchCreate() {
    $.ajax({
        url: "http://localhost:8080/branch",
        type: "GET",
        success: function (branch) {
            let content = `<select id="branch-id" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>`
            for (let i = 0; i < branch.length; i++) {
                content += `<option value="${branch[i].id}">${branch[i].name}</option>`
            }
            content += `</select>`
            $("#branch-select").html(content)
        }
    })
}
function getBranchUpdate() {
    $.ajax({
        url: "http://localhost:8080/branch",
        type: "GET",
        success: function (branch) {
            let content = `<select id="branch-id-u" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>`
            for (let i = 0; i < branch.length; i++) {
                content += `<option value="${branch[i].id}">${branch[i].name}</option>`
            }
            content += `</select>`
            $("#branch-select-u").html(content)
        }
    })
}
function getBranch() {
    $.ajax({
        url: "http://localhost:8080/branch",
        type: "GET",
        success: function (branch) {
            let content = `<select id="branch-id" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>`
            for (let i = 0; i < branch.length; i++) {
                content += `<option value="${branch[i].id}">${branch[i].name}</option>`
            }
            content += `</select>`
            $("#branch-select").html(content)
        }
    })
}
function updateEmployee() {
    let name = $("#name-u").val()
    let code = $("#code-u").val()
    let age = $("#age-u").val()
    let salary = $("#salary-u").val()
    let branchId = $("#branch-id-u").val()
    let employee = {
        name: name,
        code: code,
        age: age,
        salary: salary,
        branch: {
            id: branchId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/employees/${idUpdate}`,
        processData: false,
        contentType: false,
        type: "PUT",
        data: JSON.stringify(employee),
        success: function () {
            findAllEmployee()
        },
        error: function () {
            alert("Employee not exists!")
        }
    })
}


function deleteEmployee(id) {
    if (confirm("Are you sure?")) {
        $.ajax({
            url: `http://localhost:8080/employees/${id}`,
            type: "DELETE",
            success: function (data) {
                findAllEmployee()
            }
        })
    }
}
let idUpdate
function displayFormUpdateEmployee(id){
    $.ajax({
        url: `http://localhost:8080/employees/${id}`,
        type: "GET",
        success: function (data) {
            idUpdate = data.id
            console.log(idUpdate)
            $("#name-u").val(data.name)
            $("#code-u").val(data.code)
            $("#age-u").val(data.age)
            $("#salary-u").val(data.salary)
            getBranchUpdate()
        }
    })
    document.getElementById("update_employee").style.display = "block"
    document.getElementById("create_employee").style.display = "none"
    document.getElementById("list_employee").style.display = "none"
}
function sortByAgeAsc() {
    $.ajax({
        url: `http://localhost:8080/employees/sort`,
        type: "GET",
        success: function (data){
            console.log(data)
            displayEmployee(data);
        }
    })
}
function getAllByBranch() {
    $.ajax({
        url: `http://localhost:8080/employees/getBranch/${id_branch}`,
        type: "GET",
        success: function (data){
            console.log(data)
            displayEmployee(data);
        }
    })
}
