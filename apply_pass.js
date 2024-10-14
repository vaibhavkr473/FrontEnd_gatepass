document.getElementById('outpassForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    const fromTime = new Date(document.getElementById('fromTime').value);
    const toTime = new Date(document.getElementById('toTime').value);
    const place = document.getElementById('place').value;
    const reason = document.getElementById('reason').value;

    if (fromTime >= toTime) {
        alert('Error: From time must be earlier than To time.');
    } else if (!place || !reason) {
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
        this.reset(); // Reset form after successful submission
    }
});
