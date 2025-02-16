document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        formMessage.textContent = "Message sent successfully!";
        form.reset();
    });
});

function openModal(title, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

