document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('saasForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    // Validation patterns and functions
    const validators = {
        name: (val) => val.trim().length >= 2,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        company: (val) => val.trim().length >= 2,
        reason: (val) => val !== "",
        message: (val) => val.trim().length >= 10
    };

    // Form fields setup
    const formFields = form.querySelectorAll('input, select, textarea');

    formFields.forEach(field => {
        // Remove error state when user starts typing
        field.addEventListener('input', () => {
            const group = field.closest('.form-group');
            if (group.classList.contains('has-error')) {
                group.classList.remove('has-error');
            }
        });

        // Validate on blur
        field.addEventListener('blur', () => {
            validateField(field);
        });
    });

    function validateField(field) {
        const isValid = validators[field.name](field.value);
        const group = field.closest('.form-group');
        
        if (!isValid) {
            group.classList.add('has-error');
            return false;
        } else {
            group.classList.remove('has-error');
            return true;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        formFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate network request
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Hide form elements instead of visibility to allow card to shrink if needed
                Array.from(form.children).forEach(child => {
                    child.style.opacity = '0';
                    setTimeout(() => child.style.display = 'none', 300);
                });
                
                setTimeout(() => {
                    successState.classList.add('show');
                }, 300);
            }, 1500);
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        successState.classList.remove('show');
        
        Array.from(form.children).forEach(child => {
            child.style.display = '';
            setTimeout(() => child.style.opacity = '1', 50);
        });
        
        formFields.forEach(field => {
            field.closest('.form-group').classList.remove('has-error');
        });
    });
});
