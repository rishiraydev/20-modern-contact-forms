document.addEventListener('DOMContentLoaded', () => {
    // Set login date
    document.getElementById('loginDate').textContent = new Date().toUTCString();

    const form = document.getElementById('terminalForm');
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    
    const lineName = document.getElementById('line-name');
    const lineEmail = document.getElementById('line-email');
    const lineMessage = document.getElementById('line-message');
    const lineSubmit = document.getElementById('line-submit');
    
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errMessage = document.getElementById('err-message');

    const globalCursor = document.getElementById('globalCursor');
    const processingOutput = document.getElementById('processingOutput');
    const successOutput = document.getElementById('successOutput');
    const resetBtn = document.getElementById('resetBtn');

    // Auto-resize textarea
    inputMessage.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Move global cursor next to active input
    function updateCursorPosition(activeElement) {
        if (activeElement && activeElement.parentElement) {
            activeElement.parentElement.appendChild(globalCursor);
        }
    }

    // Input progression logic on Enter key
    inputName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputName.value.trim() !== '') {
                errName.classList.remove('active');
                inputName.disabled = true; // "Lock" the input like a real terminal
                lineEmail.classList.remove('hidden');
                inputEmail.focus();
                updateCursorPosition(inputEmail);
            } else {
                errName.classList.add('active');
            }
        }
    });

    inputEmail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(inputEmail.value)) {
                errEmail.classList.remove('active');
                inputEmail.disabled = true;
                lineMessage.classList.remove('hidden');
                inputMessage.focus();
                updateCursorPosition(inputMessage);
            } else {
                errEmail.classList.add('active');
            }
        }
    });

    inputMessage.addEventListener('keydown', (e) => {
        // Allow shift+enter for new line, enter to submit
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputMessage.value.trim() !== '') {
                errMessage.classList.remove('active');
                inputMessage.disabled = true;
                lineSubmit.classList.remove('hidden');
                globalCursor.style.display = 'none'; // Hide cursor during processing
                submitBtn.click(); // Trigger form submit
            } else {
                errMessage.classList.add('active');
            }
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Final validation check just in case
        if (!inputName.value || !inputEmail.value || !inputMessage.value) return;

        processingOutput.classList.remove('hidden');
        
        // Simulate terminal processing delay
        setTimeout(() => {
            processingOutput.classList.add('hidden');
            form.classList.add('hidden');
            successOutput.classList.remove('hidden');
            resetBtn.focus();
        }, 2000);
    });

    // Handle Reset
    resetBtn.addEventListener('click', () => {
        form.reset();
        
        // Unlock inputs
        inputName.disabled = false;
        inputEmail.disabled = false;
        inputMessage.disabled = false;
        
        // Reset textarea height
        inputMessage.style.height = 'auto';

        // Hide subsequent lines
        lineEmail.classList.add('hidden');
        lineMessage.classList.add('hidden');
        lineSubmit.classList.add('hidden');
        
        // Hide outputs
        successOutput.classList.add('hidden');
        form.classList.remove('hidden');
        
        // Restore cursor
        globalCursor.style.display = 'inline-block';
        updateCursorPosition(inputName);
        
        // Focus first input
        inputName.focus();
    });

    // Initial cursor setup
    updateCursorPosition(inputName);
    
    // Ensure clicking anywhere in the terminal focuses the active input
    document.querySelector('.terminal-body').addEventListener('click', () => {
        const activeInput = document.querySelector('.cli-input:not(:disabled)');
        if (activeInput) {
            activeInput.focus();
        }
    });
});
