// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
  const paragraph = document.getElementById("text-paragraph");
  paragraph.textContent = "You clicked the button! The text has changed.";
});

// Modify CSS styles
document.getElementById("change-style-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "#d1f0ff";
});

// Add an element
document.getElementById("add-element-btn").addEventListener("click", function () {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added to the page.";
  document.getElementById("dynamic-content").appendChild(newPara);
});

// Remove last added element
document.getElementById("remove-element-btn").addEventListener("click", function () {
  const container = document.getElementById("dynamic-content");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
