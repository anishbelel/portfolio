function closeWindow() {
    window.close();
}
const myButton = document.getElementById("submit");

myButton.addEventListener("click", function () {
    alert("Form submitted successfully!"); // Show an alert when the button is clicked
    alert("Ready to go to the home page?"); // Show an alert when the button is clicked
    window.location.href = "index.html";
    closeWindow();
});

