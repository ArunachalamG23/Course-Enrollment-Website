// Add your API endpoint here
var API_ENDPOINT = "API Endpoint id"; // Add Your API Endpoint ID

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(event){
    event.preventDefault(); // Prevent the default form submission

    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val(),
        "course": $('#course').val()  // Include selected course
    };
    
    // Log the input data
    console.log("Data being sent:", inputData); 

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error details:", textStatus, errorThrown);
            alert("Error saving student data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tbody').empty(); // Clear existing rows
            jQuery.each(response, function(i, data) {          
                $("#studentTable tbody").append("<tr> \
                    <td>" + (data['studentid'] || 'N/A') + "</td> \
                    <td>" + (data['name'] || 'N/A') + "</td> \
                    <td>" + (data['class'] || 'N/A') + "</td> \
                    <td>" + (data['age'] || 'N/A') + "</td> \
                    <td>" + (data['course'] || 'N/A') + "</td> \
                </tr>");
            });
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
}
