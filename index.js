function updateTime() {
    const now = new Date(); // Get current time
    const hours = String(now.getHours()).padStart(2, '0'); // Hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds

    const timeString = `${hours}:${minutes}:${seconds}`; // Time format
    document.getElementById('time').textContent = timeString; // Clock show
}
// Dark theme toogle 
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.clock').classList.toggle('dark-mode');
});

// Update every second
setInterval(updateTime, 1000);
updateTime(); // Update immediately when the page loads
