// Function to show a welcome prompt and display the user's name
function welcomeUser() {
    let userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== "") {
        let welcomeElement = document.createElement("h2");
        welcomeElement.textContent = `Welcome, ${userName}!`;
        welcomeElement.id = "welcomeMessage";
        document.body.insertBefore(welcomeElement, document.body.firstChild);
    }
}

// Ensure event listeners are properly added after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    welcomeUser(); // Call the function when the page loads
    document.getElementById("showPreviousCourses").addEventListener("click", showPreviousCourses);
    document.getElementById("changeTextColor").addEventListener("click", changeMissionColor);
    document.getElementById("addReact").addEventListener("click", addReactSkill);
});

// Function to show previous semester courses dynamically
function showPreviousCourses() {
    let previousCourses = [
        "College Communications 2",
        "Programming 1",
        "Software Engineering Fundamentals",
        "Introduction to Database Concepts",
        "Programming 2",
        "Software Requirements Engineering",
        "Advanced Database Concepts",
        "Java Programming",
        "Software Systems Design",
        "Functions & Number Systems",
        "Programming 3",
        "Networking for Software Developers",
        "Advanced Business Communications",
        "Discrete Mathematics",
        "Web Interface Design",
        "Business & Entrepreneurship - SET",
        "Global Citizenship",
        "Linear Algebra & Statistics"
    ];
    let courseSection = document.getElementById("courses");

    // Check if the previous courses are already displayed to prevent duplicates
    if (!document.getElementById("previousCoursesList")) {
        let previousCoursesList = document.createElement("ul");
        previousCoursesList.id = "previousCoursesList"; // Assign an ID to avoid duplication

        previousCourses.forEach(course => {
            let listItem = document.createElement("li");
            listItem.textContent = course;
            previousCoursesList.appendChild(listItem);
        });

        courseSection.appendChild(previousCoursesList);
    }
}

// Function to change mission text color
function changeMissionColor() {
    document.getElementById("mission").style.color = "red";
}

// Function to add React skill at the top of the skill list
function addReactSkill() {
    let skillsList = document.getElementById("skills-list");

    // Prevent adding React multiple times
    if (!document.getElementById("reactSkill")) {
        let reactSkill = document.createElement("li");
        reactSkill.textContent = "React";
        reactSkill.id = "reactSkill";
        skillsList.insertBefore(reactSkill, skillsList.firstChild);
    }
}
