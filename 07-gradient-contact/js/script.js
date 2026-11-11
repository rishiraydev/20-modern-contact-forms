document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradientForm');
    const submitBtn = document.getElementById('submitBtn');
    const successOverlay = document.getElementById('successOverlay');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        firstName: (val) => val.trim().length >= 2,
        lastName: (val) => val.trim().length >= 2,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        subject: (val) => val !== "",
        message: (val) => val.trim().length >= 10
    };

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Clear error on focus/input
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('has-error');
        });

        // Validate on blur
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const isValid = validators[input.name](input.value);
        if (!isValid) {
            input.parentElement.classList.add('has-error');
            return false;
        } else {
            input.parentElement.classList.remove('has-error');
            return true;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission network request
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                successOverlay.classList.add('active');
            }, 1200);
        } else {
            // Focus first error field
            const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        successOverlay.classList.remove('active');
        inputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
    });
});
