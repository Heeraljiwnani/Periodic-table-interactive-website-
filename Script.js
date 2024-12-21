document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("info-box");
    const infoBox2 = document.getElementById("info_box_2");
    const elementName = document.getElementById("element-name");
    const elementSymbol = document.getElementById("element-symbol");
    const atomicNumber = document.getElementById("atomic-number");
    const elementInfo = document.getElementById("element-info");

    const elementdensity = document.getElementById("elementdensity");
    const elementboiling_point = document.getElementById("elementboiling_point");
    const elementoxidation_state = document.getElementById("elementoxidation_state");
    const elementelectronegativity = document.getElementById("elementelectronegativity");
    const elementradius = document.getElementById("elementradius");
    const elementgroup_name = document.getElementById("elementgroup_name");
    const elementblock = document.getElementById("elementblock");

    // Theme toggle functionality
    const themeToggleButton = document.getElementById("theme-toggle");

    // Check for saved theme in localStorage
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    // Toggle theme and save preference
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        // Save the current theme in localStorage
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    // Function to update info boxes
    function updateInfoBoxes(cell) {
        const name = cell.dataset.name || 'N/A';
        const symbol = cell.dataset.symbol || 'N/A';
        const atomic = cell.dataset.atomic || 'N/A';
        const info = cell.dataset.info || 'N/A';

        const density = cell.dataset.density || 'N/A';
        const boiling_point = cell.dataset.boiling_point || 'N/A';
        const oxidation_state = cell.dataset.oxidation_state || 'N/A';
        const electronegativity = cell.dataset.electronegativity || 'N/A';
        const radius = cell.dataset.radius || 'N/A';
        const group_name = cell.dataset.group_name || 'N/A';
        const block = cell.dataset.block || 'N/A';

        // Update first info box
        document.getElementById("element-name").textContent = name;
        document.getElementById("element-symbol").textContent = symbol;
        document.getElementById("atomic-number").textContent = atomic;
        document.getElementById("element-info").textContent = info;
        document.getElementById("elementdensity").textContent = density;
        document.getElementById("elementboiling_point").textContent = boiling_point;
        document.getElementById("elementoxidation_state").textContent = oxidation_state;
        document.getElementById("elementelectronegativity").textContent = electronegativity;
        document.getElementById("elementradius").textContent = radius;
        document.getElementById("elementgroup_name").textContent = group_name;
        document.getElementById("elementblock").textContent = block;

        // Update second info box
        document.getElementById("element-name-2").textContent = name;
        document.getElementById("element-symbol-2").textContent = symbol;
        document.getElementById("atomic-number-2").textContent = atomic;
        document.getElementById("element-info-2").textContent = info;
        document.getElementById("elementdensity-2").textContent = density;
        document.getElementById("elementboiling_point-2").textContent = boiling_point;
        document.getElementById("elementoxidation_state-2").textContent = oxidation_state;
        document.getElementById("elementelectronegativity-2").textContent = electronegativity;
        document.getElementById("elementradius-2").textContent = radius;
        document.getElementById("elementgroup_name-2").textContent = group_name;
        document.getElementById("elementblock-2").textContent = block;

        // Show both info boxes
        infoBox.classList.add("show");
        infoBox2.classList.add("show");
    }


    // Add event listeners to table cells
    document.querySelectorAll("td").forEach(cell => {
        if (!cell.dataset.name) return;

        cell.addEventListener("mouseover", () => {
            updateInfoBoxes(cell);
        });

        cell.addEventListener("mouseout", () => {
            // Remove show class for smooth disappearance
            infoBox.classList.remove("show");
            infoBox2.classList.remove("show");
        });
    });

    // Add event listener to the periodic table to hide info boxes when mouse leaves
    const periodicTable = document.querySelector('.periodic');
    periodicTable.addEventListener("mouseleave", () => {
        infoBox.classList.remove("show");
        infoBox2.classList.remove("show");
    });
});