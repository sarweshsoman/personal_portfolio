// Blog data: Static array with title, description, and link
const blogData = [
    { title: "Width Based Redirect", description: "This blog explains how to create better websites that work well on both smaller and larger screens as ", link: "/Blogs/width-based-redirect.html" },
  ];
  
  const blogContainer = document.getElementById("blog-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  let currentPage = 1;
  const postsPerPage = 10;
  
  // Function to render posts for the current page
  function renderPosts() {
    blogContainer.innerHTML = ""; // Clear the container
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, blogData.length);
  
    for (let i = startIndex; i < endIndex; i++) {
      const post = blogData[i];
      const blogRow = document.createElement("div");
      blogRow.className = "blog-row";
      blogRow.innerHTML = `
        <a href="${post.link}">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
        </a>
      `;
      blogContainer.appendChild(blogRow);
    }
  
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = endIndex >= blogData.length;
  }
  
  // Event listeners for pagination buttons
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPosts();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentPage * postsPerPage < blogData.length) {
      currentPage++;
      renderPosts();
    }
  });
  
  // Initial render
  renderPosts();

  // Copy Email to Clipboard
  const copyButton = document.querySelector(".copy-button");
  const emailElement = document.getElementById("email");

  if (copyButton && emailElement) {
      copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(emailElement.innerText).then(() => {
              alert("Email address copied to clipboard!");
          }).catch(() => {
              alert("Failed to copy email address. Please try again.");
          });
      });
  }
  
// Hamburger menu toggle logic
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu visibility when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
