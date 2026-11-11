document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('neonForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');
    const inputs = form.querySelectorAll('input, textarea');

    const validators = {
        identifier: (val) => val.trim().length > 0,
        comlink: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        payload: (val) => val.trim().length > 0
    };

    inputs.forEach(input => {
        // Typing effect simulation on focus
        input.addEventListener('focus', () => {
            if(!input.value) {
                input.placeholder = '_';
            }
        });

        input.addEventListener('blur', () => {
            input.placeholder = '';
            validateField(input);
        });

        input.addEventListener('input', () => {
            input.closest('.input-line').classList.remove('has-error');
        });
    });

    function validateField(input) {
        if (!validators[input.name]) return true;

        const isValid = validators[input.name](input.value);
        if (!isValid) {
            input.closest('.input-line').classList.add('has-error');
            return false;
        } else {
            input.closest('.input-line').classList.remove('has-error');
            return true;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitBtn.classList.add('loading');
            
            // Simulate data transmission delay
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                form.style.display = 'none';
                
                // Show success state and animate log text
                successState.style.display = 'block';
                const logs = successState.querySelectorAll('p');
                logs.forEach((log, index) => {
                    log.style.opacity = '0';
                    setTimeout(() => {
                        log.style.opacity = '1';
                    }, index * 400); // Staggered appearance
                });
                
            }, 1500);
        } else {
            // Focus first error
            const firstError = form.querySelector('.has-error input, .has-error textarea');
            if(firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'block';
        successState.style.display = 'none';
        
        inputs.forEach(input => {
            input.closest('.input-line').classList.remove('has-error');
        });
        
        // Focus first input
        document.getElementById('identifier').focus();
    });
});
