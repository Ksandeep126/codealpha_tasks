function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let result = document.getElementById("result");

    // Clear any old styles
    result.classList.remove("error");

    if (dobInput === "") {
        result.innerHTML = "⚠️ Please select your date of birth!";
        result.classList.add("error"); // ✅ Add red style
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    // ✅ Check for future date
    if (dob > today) {
        result.innerHTML = "❌ Date of birth cannot be in the future!";
        result.classList.add("error"); // ✅ Add red style
        return;
    }

    // ✅ Calculate age
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
        ageMonths--;
    }

    // ✅ Show result
    result.innerHTML = `🎉 You are <b>${ageYears}</b> years, <b>${ageMonths}</b> months, and <b>${ageDays}</b> days old.`;
}
