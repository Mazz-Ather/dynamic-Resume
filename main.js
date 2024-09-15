var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElem = document.getElementById("name");
    var emailElem = document.getElementById("email");
    var phoneElem = document.getElementById("phone");
    var educationElem = document.getElementById("education");
    var experienceElem = document.getElementById("experience");
    var skillsElem = document.getElementById("skills");
    if (nameElem &&
        emailElem &&
        phoneElem &&
        educationElem &&
        experienceElem &&
        skillsElem) {
        var name_1 = nameElem.value;
        var email = emailElem.value;
        var phone = phoneElem.value;
        var education = educationElem.value;
        var experience = experienceElem.value;
        var skills = skillsElem.value;
        var resumeOutput = "\n    <h1>RESUME</h1> \n    <h2> Name:</h2>\n    <p> ".concat(name_1, " </p>\n\n    <h2> Email:</h2> \n    <p>").concat(email, " </p>\n\n <h2> phone no.:</h2>\n<p> ").concat(phone, " </p>\n\n<h2> Education:</h2>\n <p> ").concat(education, " </p>\n\n<h2> Experience:</h2>\n <p> ").concat(experience, " </p>\n\n <h2> Skills: </h2>\n<p>").concat(skills, "</p>\n\n");
        var outputElem = document.getElementById("resumeOutput");
        if (outputElem) {
            outputElem.innerHTML = resumeOutput;
        }
        else {
            console.error("please fill out every input properly");
        }
    }
});
