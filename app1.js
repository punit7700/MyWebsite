// Back to top button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            var backToTopBtn = document.getElementById("backToTop");
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
        
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        // Mobile menu toggle (placeholder - would be implemented fully in a real project)
        document.querySelector('button.md\\:hidden').addEventListener('click', function() {
            // Implementation would go here
            alert('Mobile menu would open here in a complete implementation');
        });