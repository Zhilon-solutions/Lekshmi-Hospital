// Form submission handler for Google Sheets
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dreamit-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            // Replace with your Google Apps Script Web App URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbz9MdZddeo3JtY6jmHCgsZW46feaate-zRZ4dY6Q4otdW9ZHdwoDldu5OTVavlHx2I/exec';

            fetch(scriptURL, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        alert('Thank you! Your enquiry has been submitted successfully.');
                        form.reset();
                    } else {
                        alert('Error: ' + data.message);
                    }
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your enquiry. Please try again.');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
