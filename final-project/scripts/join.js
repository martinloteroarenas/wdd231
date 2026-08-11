document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});

const openButtons = document.querySelectorAll('.benefit-btn');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.querySelector(`#${modalId}`);
        if (modal) {
            modal.showModal();
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modal = e.target.closest('dialog');
        modal.close();
    });
});

document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload();
    }
});