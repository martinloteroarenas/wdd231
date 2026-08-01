document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});