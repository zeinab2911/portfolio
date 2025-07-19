
document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector('input[type="text"]').value;
      const password = this.querySelector('input[type="password"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector("textarea").value;

      if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
      }

      console.log("Form submitted:", { name, password, email, message });

      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (!email) {
        alert("Please enter your email address");
        return;
      }

      console.log("Newsletter subscription:", email);
      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    });
  }

  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "🌓";
  darkModeToggle.style.position = "fixed";
  darkModeToggle.style.bottom = "20px";
  darkModeToggle.style.right = "20px";
  darkModeToggle.style.zIndex = "1000";
  darkModeToggle.style.background = "#0ea0b0";
  darkModeToggle.style.color = "white";
  darkModeToggle.style.border = "none";
  darkModeToggle.style.borderRadius = "50%";
  darkModeToggle.style.width = "50px";
  darkModeToggle.style.height = "50px";
  darkModeToggle.style.fontSize = "20px";
  darkModeToggle.style.cursor = "pointer";
  darkModeToggle.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  document.body.appendChild(darkModeToggle);

  const style = document.createElement("style");
  style.textContent = `
        .dark-mode {
            background-color: #121212;
            color: #f0f0f0;
        }
        .dark-mode section {
            background-color: #1e1e1e;
            color: #f0f0f0;
        }
        .dark-mode #skills td,
        .dark-mode #education td,
        .dark-mode .hobbies-list li {
            background-color: #2d2d2d;
            color: #f0f0f0;
        }
        .dark-mode h2 {
            color: #0ea0b0;
        }
    `;
  document.head.appendChild(style);

  const timelineItems = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(item);
  });

  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const skillBarsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          
          }
        });
      },
      { threshold: 0.1 }
    );

    skillBarsObserver.observe(skillsSection);
  }
});
