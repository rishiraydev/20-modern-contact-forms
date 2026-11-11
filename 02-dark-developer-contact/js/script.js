document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('devForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');

    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        projectType: (val) => val !== "",
        message: (val) => val.trim().length > 0
    };

    // Live validation
    const formElements = form.querySelectorAll('input, select, textarea');
    
    formElements.forEach(el => {
        el.addEventListener('input', () => {
            const group = el.closest('.form-group');
            if (group.classList.contains('has-error')) {
                group.classList.remove('has-error');
            }
        });
        
        el.addEventListener('blur', () => {
            validateElement(el);
        });
    });

    function validateElement(el) {
        const isValid = validators[el.name](el.value);
        const group = el.closest('.form-group');
        
        if (!isValid) {
            group.classList.add('has-error');
            return false;
        } else {
            group.classList.remove('has-error');
            return true;
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        formElements.forEach(el => {
            if (!validateElement(el)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate async network request
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            form.style.visibility = 'hidden';
            successState.classList.add('active');
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.visibility = 'visible';
        successState.classList.remove('active');
        
        formElements.forEach(el => {
            el.closest('.form-group').classList.remove('has-error');
        });
    });
});
