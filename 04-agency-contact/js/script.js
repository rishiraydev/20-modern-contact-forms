document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agencyForm');
    const submitBtn = document.getElementById('submitBtn');
    const successPanel = document.getElementById('successPanel');
    const resetBtn = document.getElementById('resetBtn');

    // Text inputs
    const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    
    textInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('has-error');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;

        // Validate text inputs
        textInputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.parentElement.classList.add('has-error');
            } else if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.parentElement.classList.add('has-error');
                }
            }
        });

        // Validate checkboxes (at least one)
        const services = form.querySelectorAll('input[name="services"]');
        const servicesError = document.getElementById('servicesError');
        let serviceChecked = false;
        
        services.forEach(cb => {
            if (cb.checked) serviceChecked = true;
        });

        if (!serviceChecked) {
            isValid = false;
            servicesError.style.display = 'block';
        } else {
            servicesError.style.display = 'none';
        }

        // Validate radio (budget)
        const budget = form.querySelector('input[name="budget"]:checked');
        const budgetError = document.getElementById('budgetError');
        
        if (!budget) {
            isValid = false;
            budgetError.style.display = 'block';
        } else {
            budgetError.style.display = 'none';
        }

        // Handle checkbox/radio changes to remove errors
        services.forEach(cb => cb.addEventListener('change', () => servicesError.style.display = 'none'));
        const radios = form.querySelectorAll('input[name="budget"]');
        radios.forEach(radio => radio.addEventListener('change', () => budgetError.style.display = 'none'));

        if (isValid) {
            submitBtn.style.opacity = '0.5';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                form.style.display = 'none';
                successPanel.classList.add('show');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1000);
        }
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'block';
        successPanel.classList.remove('show');
        
        textInputs.forEach(input => {
            input.parentElement.classList.remove('has-error');
        });
        
        document.getElementById('servicesError').style.display = 'none';
        document.getElementById('budgetError').style.display = 'none';
    });
});
