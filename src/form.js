document.addEventListener('DOMContentLoaded', function () {
    // --- 1. Logic to show/hide delivery address ---
    const deliveryOptionRadios = document.querySelectorAll('input[name="delivery_option"]');
    const addressGroup = document.getElementById('delivery-address-group');
    const addressInputs = addressGroup.querySelectorAll('input');

    deliveryOptionRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'delivery') {
                addressGroup.classList.remove('hidden');
                // Make address fields required when visible
                addressInputs.forEach(input => input.required = true);
            } else {
                addressGroup.classList.add('hidden');
                // Make address fields not required when hidden
                addressInputs.forEach(input => input.required = false);
            }
        });
    });

    // --- 2. Logic for form submission and modal ---
    const form = document.getElementById('cake-order-form');
    const modal = document.getElementById('success-modal');
    const closeModalButton = document.querySelector('.close-modal');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the default form submission
        
        // You can add more complex validation here if needed
        if (form.checkValidity()) {
            console.log('Form is valid! Showing modal.');
            // Here you would typically send the form data to a server.
            // For now, we'll just show the success message.
            modal.style.display = 'block';
            form.reset(); // Clear the form fields
            // Ensure address field is hidden again after reset
            addressGroup.classList.add('hidden');
        } else {
            console.log('Form is invalid.');
            // The browser will show default validation messages.
        }
    });

    // Close the modal when the 'x' button is clicked
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});