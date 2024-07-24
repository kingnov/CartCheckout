document.addEventListener('DOMContentLoaded', () => {
    const updateTotal = () => {
        let subtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = item.querySelector('input').value;
            const price = parseFloat(item.querySelector('.item-details p:nth-child(3)').textContent.slice(1));
            subtotal += quantity * price;
        });
        const shipping = 2;
        const total = subtotal + shipping;
        document.querySelector('.recap p:nth-child(2)').textContent = `Subtotal: €${subtotal}`;
        document.querySelector('.recap h2').textContent = `Total: €${total}`;
    };

    document.querySelectorAll('.quantity-minus').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            if (input.value > 1) {
                input.value--;
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.quantity-plus').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            input.value++;
            updateTotal();
        });
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', () => {
            if (input.value < 1) {
                input.value = 1;
            }
            updateTotal();
        });
    });

    updateTotal();
});
