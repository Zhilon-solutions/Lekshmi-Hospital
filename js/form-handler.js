// Google Apps Script Web App URL - Replace with your deployed script URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSzQI1qlFF_EbRo3KrIcuqrhBCWf5fK6d4kY-mC28A5FU5F1CFaHqlxX1gzgKeR5Us/exec';

// Handle Appointment Form (Hero Section)
document.getElementById('appointmentForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        type: 'appointment',
        name: formData.get('name'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message') || ''
    };
    
    await submitForm(data, this, 'msgSubmit');
});

// Handle Contact Form (Get in Touch)
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        type: 'contact',
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        phone: formData.get('call'),
        message: formData.get('msg') || ''
    };
    
    await submitForm(data, this, 'formsubmit');
});

// Submit form data to Google Sheets
async function submitForm(data, form, msgElementId) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const msgElement = document.getElementById(msgElementId);
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Show success message
        msgElement.classList.remove('hidden');
        msgElement.style.color = '#28a745';
        msgElement.textContent = 'Thank you! Your submission has been received.';
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            msgElement.classList.add('hidden');
        }, 5000);
        
    } catch (error) {
        // Show error message
        msgElement.classList.remove('hidden');
        msgElement.style.color = '#dc3545';
        msgElement.textContent = 'Something went wrong. Please try again.';
        
        console.error('Error:', error);
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Message';
    }
}
