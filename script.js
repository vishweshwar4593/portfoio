// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Increase Font Size
function increaseFontSize() {
    let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
}

// Control Panel
window.onload = function () {
    const controlPanel = document.createElement("div");
    controlPanel.classList.add("control-panel");

    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark Mode";
    darkModeButton.onclick = toggleDarkMode;

    const fontSizeButton = document.createElement("button");
    fontSizeButton.textContent = "Increase Font Size";
    fontSizeButton.onclick = increaseFontSize;

    controlPanel.appendChild(darkModeButton);
    controlPanel.appendChild(fontSizeButton);

    document.body.appendChild(controlPanel);
};
