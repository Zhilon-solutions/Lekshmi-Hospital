// Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSzQI1qlFF_EbRo3KrIcuqrhBCWf5fK6d4kY-mC28A5FU5F1CFaHqlxX1gzgKeR5Us/exec';

// ── Appointment Forms (all pages) ─────────────────────────────────────────────
document.querySelectorAll('#appointmentForm, #bookApptForm').forEach(function(form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {
            type:    'appointment',
            name:    formData.get('name'),
            phone:   formData.get('phone'),
            service: formData.get('service') || '',
            message: formData.get('message') || ''
        };

        // Find the success div INSIDE this specific form — avoids duplicate-ID clash
        const msgElement = this.querySelector('.form-msg');
        await submitForm(data, this, msgElement);
    });
});

// ── Submit helper ─────────────────────────────────────────────────────────────
async function submitForm(data, form, msgElement) {
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Submitting...';

    try {
        await fetch(SCRIPT_URL, {
            method:  'POST',
            mode:    'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(data)
        });

        if (msgElement) {
            msgElement.classList.remove('hidden');
            msgElement.style.color = '#28a745';
            msgElement.textContent = 'Thank you! Your submission has been received.';
            setTimeout(() => msgElement.classList.add('hidden'), 5000);
        }

        form.reset();

    } catch (error) {
        if (msgElement) {
            msgElement.classList.remove('hidden');
            msgElement.style.color = '#dc3545';
            msgElement.textContent = 'Something went wrong. Please try again.';
        }
        console.error('Form submit error:', error);
    } finally {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Submit Message';
    }
}
