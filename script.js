// Poll functionality
document.addEventListener('DOMContentLoaded', function() {
    const voteButton = document.getElementById('vote-button');
    if (voteButton) {
        voteButton.addEventListener('click', function() {
            const pollResults = document.getElementById('poll-results');
            pollResults.style.display = 'block';
            
            // In a real implementation, this would send the vote to a server
            // For now, we'll just show a thank you message
        });
    }
    
    // Navigation highlight
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});