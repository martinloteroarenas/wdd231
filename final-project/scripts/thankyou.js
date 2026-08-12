const formData = new URLSearchParams(window.location.search);

function getValue(param, defaultValue = 'N/A') {
    const value = formData.get(param);

    return (value && value.trim() !== '') ? decodeURIComponent(value) : defaultValue;
}

const showElement = document.querySelector('#results');

if (showElement) {
    showElement.innerHTML = `
        <div class="info-card">
            <h3>Applicant name:</h3>
            <p>${getValue('fname')} ${getValue('lname')}</p>
        </div>

        <div class="info-card">
            <h3>Applicant music genre:</h3>
            <p>${getValue('title')}</p>
        </div>

        <div class="info-card">
            <h3>Email address:</h3>
            <p>${getValue('email')}</p>
        </div>

        <div class="info-card">
            <h3>Mobile phone:</h3>
            <p>${getValue('phone')}</p>
        </div>

        <div class="info-card">
            <h3>Stage name:</h3>
            <p>${getValue('organization')}</p>
        </div>

        <div class="info-card">
            <h3>Membership type selected:</h3>
            <p>${getValue('membershipLevel')}</p>
        </div>

        <div class="info-card">
            <h3>Application Date & time:</h3>
            <p>📅 ${getValue('timestamp')}</p>
        </div>

        <div class="info-card full-width">
            <h3>Applicant background:</h3>
            <p>${getValue('description', 'No description provided.')}</p>
        </div>
    `;
}