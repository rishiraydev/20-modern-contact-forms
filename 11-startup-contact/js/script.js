document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('startupForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');
    const resetBtn = document.getElementById('resetBtn');
    
    // Inputs
    const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    const checkboxes = form.querySelectorAll('input[type="checkbox"][name="interest"]');
    const interestError = document.getElementById('interestError');

    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        message: (val) => val.trim().length > 0
    };

    // Text input validation
    textInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('has-error');
        });

        input.addEventListener('blur', () => {
            validateTextInput(input);
        });
    });

    // Checkbox validation reset
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            interestError.parentElement.classList.remove('has-error');
        });
    });

    function validateTextInput(input) {
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

    function validateCheckboxes() {
        const isChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (!isChecked) {
            interestError.parentElement.classList.add('has-error');
            return false;
        }
        return true;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        textInputs.forEach(input => {
            if (!validateTextInput(input)) isValid = false;
        });
        
        if (!validateCheckboxes()) isValid = false;

        if (isValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                successMsg.classList.add('active');
            }, 1200);
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        successMsg.classList.remove('active');
        
        textInputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
        interestError.parentElement.classList.remove('has-error');
    });
});
