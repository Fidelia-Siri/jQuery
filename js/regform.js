$(function () {

    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }

    showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
        autoOpen: false,
        width: 500,
        height: 500,
        modal: true
    });
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    });

    /*DatePicker*/

    $("#dob").datepicker({
        changeYear: true,
        changeMonth: true,
        yearRange: "1990:2018",
        dateFormat: "dd-mm-yy"
    });

    /* Validation of RegForm */

    $(".submit").click(function () {

        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },

                name: {
                    required: true,

                },
                email: {
                    required: true,
                },
                mobile: {
                    required: true,
                    minlength: 10

                },
                course: {
                    required: true,

                },
                percentage: {
                    required: true,
                },
                dob: {
                    required: true,
                },
            },
            messages: {
                usn: {
                    required: "USN can't be empty",
                    minlength: "USN must be of 10 digit",
                    maxlength: "USN can't be more than 10 digit"
                },

                name: {
                    required: "Name can't be empty",

                },
                email: {
                    required: "Email can't be empty",
                },

                mobile: {
                    required: "Mobile can't be empty",
                    minlength: "Mobile must be of 10 digit"


                },
                course: {
                    required: "Please select your courses ",
                },
                percentage: {
                    required: "Enter your percentage ",
                },
                dob: {
                    required: "Enter your date of birth ",
                },

            }

        }).form();
        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();
            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "course": course,
                "percentage": percentage,
                "dob": dob
            }

            var students = getDataFromLocalStorage();
            students.push(student);

            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }

    });

    /* End of Registered Form Validation */

    function showRegisteredStudents() {
        var students = getDataFromLocalStorage();

        var data = "";

        if (students.length == 0) {
            data = "<h3>No Students registered Yet...."
        } else {
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>Email</th>";
            data += "<th>Mobile</th>";
            data += "<th>DOB</th>";
            data += "<th>Course</th>";
            data += "<th>Percentage</th>";
            data += "</tr></thead>";

            for (var i = 0; i < students.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + students[i].usn + "</td>";
                data += "<td>" + students[i].name + "</td>";
                data += "<td>" + students[i].email + "</td>";
                data += "<td>" + students[i].mobile + "</td>";
                data += "<td>" + students[i].dob + "</td>";
                data += "<td>" + students[i].course + "</td>";
                data += "<td>" + students[i].percentage + "</td>";
                data += "</tr>";
            }
            data += "</table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength": 2
        })


    }

    function getDataFromLocalStorage() {
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }

    function updateLocalStorageData(updatedStudentsArr) {
        localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
    }
});
