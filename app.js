
document.getElementById('consultationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        consultationType: document.getElementById('consultationType').value,
        preferredTime: document.getElementById('preferredTime').value,
        description: document.getElementById('description').value
    };

    // Validate required fields
    if (!formData.fullName || !formData.phone || !formData.consultationType || !formData.preferredTime) {
        alert('لطفاً تمام فیلدهای ضروری را پر کنید.');
        return;
    }

    // Validate phone number (basic Iranian mobile format)
    const phoneRegex = /^09[0-9]{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        alert('لطفاً شماره موبایل را به صورت صحیح وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)');
        return;
    }

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form
    this.reset();

    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // In a real application, you would send this data to your server
    console.log('Form submitted with data:', formData);
});

// Add some interactive effects
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    element.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});