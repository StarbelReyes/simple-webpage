function toggleParagraph() {
    var paragraph = document.getElementById("paragraph")
    paragraph.classList.toggle("hidden");
}

function toggleQualifications() {
    var paragraph = document.getElementById("Qualifications")
    paragraph.classList.toggle("hidden");
}

function toggleContact() {
    var paragraph = document.getElementById("Contact")
    paragraph.classList.toggle("hidden");
}

function resetAll() {
    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.classList.add("hidden");
    });
}