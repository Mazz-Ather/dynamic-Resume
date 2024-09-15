document.getElementById("resume")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameElem = document.getElementById("name") as HTMLInputElement;
  const emailElem = document.getElementById("email") as HTMLInputElement;
  const phoneElem = document.getElementById("phone") as HTMLInputElement;
  const educationElem = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const experienceElem = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const skillsElem = document.getElementById("skills") as HTMLInputElement;

  if (
    nameElem &&
    emailElem &&
    phoneElem &&
    educationElem &&
    experienceElem &&
    skillsElem
  ) {
    const name = nameElem.value;
    const email = emailElem.value;
    const phone = phoneElem.value;
    const education = educationElem.value;
    const experience = experienceElem.value;
    const skills = skillsElem.value;

    var resumeOutput = `
    <h1>RESUME</h1> 
    <h2> Name:</h2>
    <p> ${name} </p>

    <h2> Email:</h2> 
    <p>${email} </p>

 <h2> phone no.:</h2>
<p> ${phone} </p>

<h2> Education:</h2>
 <p> ${education} </p>

<h2> Experience:</h2>
 <p> ${experience} </p>

 <h2> Skills: </h2>
<p>${skills}</p>

`;

    const outputElem = document.getElementById("resumeOutput");
    if (outputElem) {
      outputElem.innerHTML = resumeOutput;
    } else {
      console.error("please fill out every input properly");
    }
  }
});
