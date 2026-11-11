document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('corpForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        firstName: (val) => val.trim().length > 0,
        lastName: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        company: (val) => val.trim().length > 0,
        country: (val) => val !== "",
        message: (val) => val.trim().length > 0
    };

    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('error');
        });

        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        if (!validators[input.name]) return true;

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
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Submit Request';
                submitBtn.disabled = false;
                
                form.style.display = 'none';
                document.querySelector('.form-intro').style.display = 'none';
                successState.style.display = 'block';
                
            }, 1500);
        } else {
            const firstError = form.querySelector('.error input, .error select, .error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'block';
        document.querySelector('.form-intro').style.display = 'block';
        successState.style.display = 'none';
        
        inputs.forEach(input => {
            input.parentElement.classList.remove('error');
        });
    });
});
