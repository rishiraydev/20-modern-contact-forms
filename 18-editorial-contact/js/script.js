document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editorialForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        fullName: (val) => val.trim().length > 0,
        emailAddr: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        inquiryType: (val) => val !== "",
        messageBody: (val) => val.trim().length > 0
    };

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('has-error');
        });

        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        if (!validators[input.name]) return true;

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

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success screen
                form.style.opacity = '0';
                form.style.visibility = 'hidden';
                successState.classList.add('active');
                
            }, 1200);
        } else {
            const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        
        // Hide success screen
        successState.classList.remove('active');
        form.style.opacity = '1';
        form.style.visibility = 'visible';
        
        inputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
    });
});
