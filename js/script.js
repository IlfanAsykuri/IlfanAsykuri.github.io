// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back To Up

// Get the button
let backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with smooth animation
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Send Message
function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length > 0 && email.length > 0 && message.length > 0) {
    // Semua input diisi dengan nilai yang valid
    const url =
      "https://api.whatsapp.com/send?phone=6282144356926&text=Halo%20Admin.%0A%0ANama%20Saya%20%3A%20*" +
      name +
      "*%0AEmail%20Saya%20%3A%20*" +
      email +
      "*%0A%0A" +
      message;
    // Lakukan aksi pengiriman pesan atau yang lainnya di sini
    window.open(url);
  } else {
    // Salah satu atau lebih input tidak terisi dengan nilai yang valid
    alert("Mohon isi dengan benar!");
  }
}
