let students = [];

            function validate(){
                let name = document.getElementById("name-container").value;

                let age = document.getElementById("age-container").value;

                let email = document.getElementById("email-container").value;

                let course = document.getElementById("course-container").value;

                if(name == "")
                {
                    alert("Name should not be empty");                       
                }
                else if(age <= 17)
                {
                    alert("Age Should be at least 18");
                }
                else if(email == "")
                {
                    alert("email should not be empty");
                }
                else if(course == "")
                {
                    alert("Course must be selected");
                }
                else
                {
                    alert("Successful! Table Updated");

                    addToArray();
                    renderTable();
                    // Clearing Form
                    clearForm();
                }
            }

            function clearForm(){
                document.getElementById("name-container").value = "";
                document.getElementById("age-container").value = "";
                document.getElementById("email-container").value = "";
                document.getElementById("course-container").value = "";
            }

            function createStudentObj(){
                let nameV = document.getElementById("name-container").value;
                let ageV = document.getElementById("age-container").value;
                let emailV = document.getElementById("email-container").value;
                let courseV = document.getElementById("course-container").value;

                return {
                    name: nameV,
                    age: ageV,
                    email: emailV,
                    course: courseV
                };
            }

            function addToArray(){
                let student = createStudentObj();
                students.push(student);
            }

            function delRecord(i){
                students.splice(i, 1);
                renderTable();
            }
            
            function clearTable(){
                const tableBody = document.getElementById("studentTableBody");
                tableBody.innerHTML = "";
            }

            function addToTable(i){
                const tableBody = document.getElementById("studentTableBody");
                let row = document.createElement("tr");
                let cell1 = document.createElement("td");
                let cell2 = document.createElement("td");
                let cell3 = document.createElement("td");
                let cell4 = document.createElement("td");
                let cell5 = document.createElement("td");
                let cell6 = document.createElement("td");

                cell1.innerHTML = students[i].name;
                cell2.innerHTML = students[i].age;
                cell3.innerHTML = students[i].email;
                cell4.innerHTML = students[i].course;
                cell5.innerHTML = "Registered";
                
                let delButton = document.createElement("button");
                delButton.innerHTML = "Delete";
                delButton.addEventListener("click", function(){
                    delRecord(i);
                });  // we pass i here so that when we click delete it remembers a particular delete button belongs to which row;
                cell6.appendChild(delButton);

                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                row.appendChild(cell4);
                row.appendChild(cell5);
                row.appendChild(cell6);

                tableBody.appendChild(row);
            }


            function renderTable(){
                clearTable();
                for(let i = 0; i < students.length; i++)
                {
                    addToTable(i);
                }
            }

            function parentFunction(){
                validate();
            }