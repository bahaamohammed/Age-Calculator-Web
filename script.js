let result = document.getElementById("result");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let y3 = today.getFullYear() - birthDate.getFullYear();
    let m3 = today.getMonth() - birthDate.getMonth();
    let d3 = today.getDate() - birthDate.getDate();

    if (d3 < 0) {
        m3--;
        d3 += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}
