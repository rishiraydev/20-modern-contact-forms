document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactMapForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const closeAlert = document.getElementById('closeAlert');

    const validators = {
        name: (val) => val.trim().length >= 2,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        message: (val) => val.trim().length >= 10
    };

    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('error');
        });

        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const isValid = validators[input.name](input.value);
        if (!isValid) {
            input.parentElement.classList.add('error');
            return false;
        } else {
            input.parentElement.classList.remove('error');
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
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                
                form.reset();
                successMessage.classList.add('show');
            }, 1000);
        } else {
            const firstError = form.querySelector('.error input, .error textarea');
            if (firstError) firstError.focus();
        }
    });

    closeAlert.addEventListener('click', () => {
        successMessage.classList.remove('show');
    });

    // Map button interaction (simulated)
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', () => {
            alert("This would typically open Google Maps or another mapping service for directions.");
        });
    }
});
