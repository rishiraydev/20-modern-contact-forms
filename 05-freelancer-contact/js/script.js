document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('freelanceForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        name: (val) => val.trim().length >= 2,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        projectType: (val) => val !== "",
        budget: (val) => val !== "",
        message: (val) => val.trim().length >= 10
    };

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Clear error on input
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            if (group.classList.contains('error')) {
                group.classList.remove('error');
            }
        });

        // Validate on blur
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const isValid = validators[input.name](input.value);
        const group = input.closest('.form-group');
        
        if (!isValid) {
            group.classList.add('error');
            return false;
        } else {
            group.classList.remove('error');
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

            // Simulate form submission delay
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                form.style.display = 'none';
                document.querySelector('.form-header').style.display = 'none';
                successState.classList.add('active');
                
                // Scroll to top of form area on mobile
                if (window.innerWidth <= 1024) {
                    document.querySelector('.form-main').scrollIntoView({ behavior: 'smooth' });
                }
            }, 1200);
        } else {
            // Focus first error
            const firstError = form.querySelector('.error input, .error select, .error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'flex';
        document.querySelector('.form-header').style.display = 'block';
        successState.classList.remove('active');
        
        inputs.forEach(input => {
            input.closest('.form-group').classList.remove('error');
        });
    });
});
