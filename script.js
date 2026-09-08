document.getElementById("checkButton").addEventListener("click", function() {

    let age = Number(document.getElementById("ageInput").value);

    if (age >= 18) {
        document.getElementById("result").textContent = "You are an adult.";
    } else {
        document.getElementById("result").textContent = "You are under 18.";
    }

});
let skills = ["HTML", "CSS", "JavaScript", "Git"];
for (let skill of skills) {
    let listItem = document.createElement("li");
    listItem.textContent = skill;
    document.getElementById("skillsList").appendChild(listItem);
}