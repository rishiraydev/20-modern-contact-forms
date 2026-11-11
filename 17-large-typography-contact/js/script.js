document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('typoForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        budget: (val) => val !== "",
        message: (val) => val.trim().length > 0
    };

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Change color of select once an option is picked
        if(input.tagName === 'SELECT') {
            input.addEventListener('change', () => {
                input.style.color = 'var(--text-main)';
            });
        }

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
                
                // Hide form, show success
                form.style.opacity = '0';
                form.style.pointerEvents = 'none';
                successState.style.display = 'block';
                
            }, 1000);
        } else {
            const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        
        // Reset select color
        const select = form.querySelector('select');
        if(select) select.style.color = '';

        // Hide success, show form
        successState.style.display = 'none';
        form.style.opacity = '1';
        form.style.pointerEvents = 'all';
        
        inputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
    });
});
