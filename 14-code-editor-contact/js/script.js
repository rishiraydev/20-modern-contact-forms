document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editorForm');
    const runBtn = document.getElementById('runBtn');
    const consoleOutput = document.getElementById('consoleOutput');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Auto-resize textarea to fit content, maintaining IDE look
    const messageInput = document.getElementById('message');
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Validation Rules
    const validators = {
        name: (val) => val.trim().length > 0,
        email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        subject: (val) => val !== "",
        message: (val) => val.trim().length > 0
    };

    function appendToConsole(text, type = 'info') {
        const logEntry = document.createElement('div');
        logEntry.className = `log ${type}`;
        
        // Add timestamp
        const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        logEntry.textContent = `[${time}] ${text}`;
        
        consoleOutput.appendChild(logEntry);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // Input event listeners for validation clearance
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('has-error');
        });

        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    function validateField(input) {
        if (!validators[input.name]) return true;

        const isValid = validators[input.name](input.value);
        if (!isValid) {
            input.classList.add('has-error');
            return false;
        } else {
            input.classList.remove('has-error');
            return true;
        }
    }

    // Run Button acts as Submit
    runBtn.addEventListener('click', () => {
        // Trigger native form submission event
        const submitEvent = new Event('submit', {
            'bubbles': true,
            'cancelable': true
        });
        form.dispatchEvent(submitEvent);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        appendToConsole('> Executing sendMessage.js...');

        let isValid = true;
        let errorFields = [];

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
                errorFields.push(input.name);
            }
        });

        if (isValid) {
            runBtn.disabled = true;
            runBtn.style.opacity = '0.5';
            
            appendToConsole('> Compiling data object...', 'info');
            
            setTimeout(() => {
                appendToConsole('> POST /api/mail 200 OK', 'success');
                appendToConsole('> Message Sent Successfully!', 'success');
                
                // Reset form
                form.reset();
                messageInput.style.height = 'auto'; // reset textarea height
                runBtn.disabled = false;
                runBtn.style.opacity = '1';
                
            }, 1200);

        } else {
            appendToConsole(`> Error: Validation failed for [${errorFields.join(', ')}]`, 'error');
            appendToConsole('> Process exited with code 1.', 'error');
            
            // Focus first error
            const firstError = form.querySelector('.has-error');
            if (firstError) firstError.focus();
        }
    });

    // Mock toggle sidebar folders
    const folders = document.querySelectorAll('.tree-item.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            folder.classList.toggle('open');
        });
    });
});
