function startExploring() {
    window.location.href = "#"; // Replace '#' with the URL of the page you want to link to
}
function startExploring() {
    window.location.href = "#"; // Replace '#' with the URL of the page you want to link to
}

function openPost(page) {
    window.open(page, "_blank"); // Opens the page in a new tab
}
function openAddBlogPage() {
    window.location.href = 'add-blog.html'; // Redirects to the add blog page
}
document.getElementById('blogForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    const imageFile = document.getElementById('blogImage').files[0];

    if (!title || !content || !imageFile) {
        alert("Please fill in all fields.");
        return;
    }

    // Read the image file as a data URL
    const reader = new FileReader();
    reader.onload = function (event) {
        const imageDataUrl = event.target.result;

        // Create the HTML structure for the new blog post page
        const blogHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                    .blog-container { display: flex; align-items: flex-start; }
                    .blog-image { width: 300px; margin-right: 20px; }
                    .blog-content { max-width: 600px; }
                    .blog-title { font-size: 2em; margin-bottom: 10px; }
                    .blog-text { font-size: 1.1em; line-height: 1.6; }
                </style>
            </head>
            <body>
                <div class="blog-container">
                    <img src="${imageDataUrl}" alt="${title}" class="blog-image">
                    <div class="blog-content">
                        <h1 class="blog-title">${title}</h1>
                        <p class="blog-text">${content}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Open the blog post in a new tab
        const blob = new Blob([blogHtml], { type: 'text/html' });
        const newWindow = window.open(URL.createObjectURL(blob));
        newWindow.document.write(blogHtml);
        newWindow.document.close();
    };

    // Read the image file
    reader.readAsDataURL(imageFile);
});
