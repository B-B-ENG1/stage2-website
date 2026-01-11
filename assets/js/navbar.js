fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar-placeholder').innerHTML = html;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const navbar = document.getElementById('navbar-placeholder');
        const links = navbar.querySelectorAll('a');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.id = 'active';
            }
        });
        
        // For dropdowns
        const dropdowns = navbar.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const contentLinks = dropdown.querySelectorAll('.dropdown-content a');
            contentLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    dropdown.querySelector('.dropbtn').id = 'active';
                    link.id = 'active';
                }
            });
        });
    })
    .catch(error => console.error('Error loading navbar:', error));