const formData = new URLSearchParams(window.location.search);

function getValue(param, defaultValue = 'N/A') {
    const value = formData.get(param);

    return (value && value.trim() !== '') ? decodeURIComponent(value) : defaultValue;
}

const showElement = document.querySelector('#results');

if (showElement) {
    showElement.innerHTML = `
        <div class="info-card">
            <h3>APPLICANT NAME:</h3>
            <p>${getValue('fname')} ${getValue('lname')}</p>
        </div>

        <div class="info-card">
            <h3>ORGANIZATIONAL TITLE:</h3>
            <p>${getValue('title')}</p>
        </div>

        <div class="info-card">
            <h3>EMAIL ADDRESS:</h3>
            <p>${getValue('email')}</p>
        </div>

        <div class="info-card">
            <h3>MOBILE PHONE:</h3>
            <p>${getValue('phone')}</p>
        </div>

        <div class="info-card">
            <h3>BUSINESS / ORGANIZATION:</h3>
            <p>${getValue('organization')}</p>
        </div>

        <div class="info-card">
            <h3>MEMBERSHIP LEVEL SELECTED:</h3>
            <p>${getValue('membershipLevel')}</p>
        </div>

        <div class="info-card">
            <h3>APPLICATION DATE & TIME:</h3>
            <p>📅 ${getValue('timestamp')}</p>
        </div>

        <div class="info-card full-width">
            <h3>BUSINESS DESCRIPTION:</h3>
            <p>${getValue('description', 'No description provided.')}</p>
        </div>
    `;
}