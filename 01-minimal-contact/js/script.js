document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const resetBtn = document.getElementById('resetBtn');

    // Validation rules
    const rules = {
        fullName: {
            required: true,
            validate: (val) => val.trim().length >= 2
        },
        email: {
            required: true,
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
        },
        subject: {
            required: true,
            validate: (val) => val.trim().length >= 3
        },
        message: {
            required: true,
            validate: (val) => val.trim().length >= 10
        }
    };

    // Remove error class on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            if (formGroup.classList.contains('has-error')) {
                formGroup.classList.remove('has-error');
            }
        });
        
        // Add basic blur validation
        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    function validateField(input) {
        const fieldName = input.name;
        const rule = rules[fieldName];
        const formGroup = input.closest('.form-group');
        let isValid = true;

        if (rule) {
            if (rule.required && !input.value.trim()) {
                isValid = false;
            } else if (rule.validate && !rule.validate(input.value)) {
                isValid = false;
            }
        }

        if (!isValid) {
            formGroup.classList.add('has-error');
            input.setAttribute('aria-invalid', 'true');
        } else {
            formGroup.classList.remove('has-error');
            input.removeAttribute('aria-invalid');
        }

        return isValid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        
        // Validate all fields
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Simulate API call
            submitBtn.classList.add('loading');
            submitBtn.setAttribute('disabled', 'true');
            
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.removeAttribute('disabled');
                
                // Show success state
                form.style.display = 'none';
                successMessage.classList.add('show');
                successMessage.setAttribute('aria-hidden', 'false');
                
            }, 1500);
        } else {
            // Focus first invalid element
            const firstInvalid = form.querySelector('.has-error input, .has-error textarea');
            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    });

    // Reset form
    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.remove('show');
        successMessage.setAttribute('aria-hidden', 'true');
        
        inputs.forEach(input => {
            input.closest('.form-group').classList.remove('has-error');
            input.removeAttribute('aria-invalid');
        });
    });
});
