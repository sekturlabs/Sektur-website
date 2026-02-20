// SEKTUR Contact Form - Formspree Integration
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    let submitting = false;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitting) return;
        submitting = true;

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.style.display = 'none';
                successMsg.classList.add('success');
                successMsg.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            errorMsg.classList.add('error');
            errorMsg.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = 'Send Message';
            submitting = false;
        }
    });
});
