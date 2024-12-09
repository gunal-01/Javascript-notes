const output = document.getElementById("output");

document.querySelectorAll(".tree li").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent triggering parent elements
        clearHighlights();
        element.classList.add("highlight");
        output.textContent = `You selected: ${element.id}`;
    });
});

function clearHighlights() {
    document.querySelectorAll(".tree li").forEach((element) => {
        element.classList.remove("highlight");
    });
}

const getParentButton = document.getElementById("getParent");
const getChildrenButton = document.getElementById("getChildren");
const getNextSiblingButton = document.getElementById("getNextSibling");
const getPreviousSiblingButton = document.getElementById("getPreviousSibling");

function getSelectedElement() {
    return document.querySelector(".tree .highlight");
}

getParentButton.addEventListener("click", () => {
    const selected = getSelectedElement();
    if (selected && selected.parentElement.closest("li")) {
        clearHighlights();
        const parent = selected.parentElement.closest("li");
        parent.classList.add("highlight");
        output.textContent = `Parent: ${parent.id}`;
    } else {
        output.textContent = "No parent element found.";
    }
});

getChildrenButton.addEventListener("click", () => {
    const selected = getSelectedElement();
    if (selected) {
        clearHighlights();
        const children = selected.querySelectorAll(":scope > ul > li");
        if (children.length > 0) {
            children.forEach((child) => child.classList.add("highlight"));
            output.textContent = `Children: ${Array.from(children)
                .map((child) => child.id)
                .join(", ")}`;
        } else {
            output.textContent = "No children found.";
        }
    } else {
        output.textContent = "Please select an element first.";
    }
});

getNextSiblingButton.addEventListener("click", () => {
    const selected = getSelectedElement();
    if (selected && selected.nextElementSibling) {
        clearHighlights();
        const sibling = selected.nextElementSibling;
        sibling.classList.add("highlight");
        output.textContent = `Next Sibling: ${sibling.id}`;
    } else {
        output.textContent = "No next sibling found.";
    }
});

getPreviousSiblingButton.addEventListener("click", () => {
    const selected = getSelectedElement();
    if (selected && selected.previousElementSibling) {
        clearHighlights();
        const sibling = selected.previousElementSibling;
        sibling.classList.add("highlight");
        output.textContent = `Previous Sibling: ${sibling.id}`;
    } else {
        output.textContent = "No previous sibling found.";
    }
});
