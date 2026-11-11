document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('splitForm');
    const submitBtn = document.getElementById('submitBtn');
    const successState = document.getElementById('successState');
    const resetBtn = document.getElementById('resetBtn');
    const btnText = submitBtn.querySelector('.btn-text');

    const validators = {
        firstName: (val) => val.trim().length > 0,
        lastName: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        inquiryType: (val) => val !== "",
        message: (val) => val.trim().length >= 5
    };

    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('has-error');
        });

        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    function validateField(input) {
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
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            btnText.textContent = "Sending...";

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                btnText.textContent = "Submit Request";
                
                form.style.display = 'none';
                document.querySelector('.form-container h2').style.display = 'none';
                successState.style.display = 'block';
                
                if (window.innerWidth <= 1024) {
                    successState.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 1200);
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'flex';
        document.querySelector('.form-container h2').style.display = 'block';
        successState.style.display = 'none';
        
        inputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
    });
});
