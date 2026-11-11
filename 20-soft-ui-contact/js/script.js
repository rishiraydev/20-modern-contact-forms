document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('softForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        message: (val) => val.trim().length > 0
    };

    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.closest('.input-group').classList.remove('has-error');
        });

        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        if (!validators[input.name]) return true;

        const isValid = validators[input.name](input.value);
        if (!isValid) {
            input.closest('.input-group').classList.add('has-error');
            return false;
        } else {
            input.closest('.input-group').classList.remove('has-error');
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
            
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                
                // Show success screen
                form.style.display = 'none';
                document.querySelector('.card-header').style.display = 'none';
                successState.classList.add('active');
                
            }, 1500);
        } else {
            const firstError = form.querySelector('.has-error input, .has-error textarea');
            if (firstError) firstError.focus();
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        
        successState.classList.remove('active');
        form.style.display = 'flex';
        document.querySelector('.card-header').style.display = 'block';
        
        inputs.forEach(input => {
            input.closest('.input-group').classList.remove('has-error');
        });
    });
});
