document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bentoForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        subject: (val) => val !== "",
        message: (val) => val.trim().length > 0
    };

    const inputs = form.querySelectorAll('input, select, textarea');

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
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                successState.classList.add('active');
            }, 1200);
        } else {
            const firstError = form.querySelector('.error input, .error select, .error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        successState.classList.remove('active');
        inputs.forEach(input => {
            input.parentElement.classList.remove('error');
        });
    });
});
