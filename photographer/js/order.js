function toggleAddressField() {
    var deliveryCheckbox = document.getElementById('deliveryCheckbox');
    var addressField = document.getElementById('deliveryAddress');
    if (deliveryCheckbox.checked) {
        addressField.style.display = 'block';
    } else {
        addressField.style.display = 'none';
    }
}

// Function to show Tablo size dropdown only when Tablo is selected as a product
document.getElementById('product').addEventListener('change', function() {
    var product = this.value;
    var tabloSizeField = document.getElementById('tabloSize');
    if (product === 'tablo') {
        tabloSizeField.style.display = 'block';
    } else {
        tabloSizeField.style.display = 'none';
    }
});

// Handle form submission and show modal (without actual submission for demo purposes)
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    var modal = new bootstrap.Modal(document.getElementById('orderModal'));
    modal.show(); // Show the modal pop-up
});
