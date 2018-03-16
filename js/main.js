(function() {
    var articles = document.querySelectorAll('article'),
        ticking = false;

    window.addEventListener('scroll', function(e) {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkIfInView();
                ticking = false;
            });
            
            ticking = true;
        }
    });

    function checkIfInView() {
        articles.forEach(function(article) {
            if (article.classList.contains('isvisible')) return;

            if (isElementInViewport(article)) {
                article.classList.add('isvisible');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top + 140 < window.innerHeight;
    }
})()