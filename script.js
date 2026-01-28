//notification function
function showNotification(message, duration = 3000) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('exit');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// Handle reservation form submission
document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showNotification('Reservation Confirmed');
    // Reset form after showing notification
    setTimeout(() => {
        this.reset();
    }, 500);
});

// Add touch-friendly hover animations
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, a.btn, .btn');
    const links = document.querySelectorAll('nav a');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    links.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.color = '#ffc107';
        });
        link.addEventListener('touchend', function() {
            this.style.color = '#eee';
        });
    });
});