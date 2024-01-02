function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const resultElement = document.getElementById("result");

  if (birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonth--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonth < 0) {
      ageYears--;
      ageMonth += 12;
    }

    resultElement.innerText = `Your age is ${ageYears} years, ${ageMonth} months, and ${ageDays} days.`;
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = "Please enter your birthdate";
    resultElement.style.color = "red";
  }
}
