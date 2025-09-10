document.addEventListener("DOMContentLoaded", function () {
    // Select all forms with the class .subscribe-form
    const forms = document.querySelectorAll(".subscribe-form");
  
    forms.forEach(function (form) {
      const emailInput = form.querySelector(".newsletterEmail");
      const errorElement = form.nextElementSibling; // the .error-message div
  
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Reset previous errors
        errorElement.textContent = "";
        errorElement.classList.remove("show");
        emailInput.classList.remove("error");
  
        // Validation
        if (!emailInput.value.trim()) {
          errorElement.textContent = "This field is required";
          errorElement.classList.add("show");
          emailInput.classList.add("error");
        } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(emailInput.value.trim())) {
          errorElement.textContent = "Please enter a valid email";
          errorElement.classList.add("show");
          emailInput.classList.add("error");
        }
      });
  
      // Clear error on typing
      emailInput.addEventListener("input", function () {
        errorElement.textContent = "";
        errorElement.classList.remove("show");
        emailInput.classList.remove("error");
      });
    });
  });
  