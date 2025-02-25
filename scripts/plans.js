// scripts/plans.js
document.addEventListener('DOMContentLoaded', function () {
  // Handle Plan Selection
  const planButtons = document.querySelectorAll('.plan-button');
  planButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const plan = this.parentElement.querySelector('h3').innerText;
      alert(`You selected the ${plan}. Redirecting to payment...`);
      // Redirect to payment page or handle subscription logic here
    });
  });
});
