(() => {

    // search bar animation triggered after click
    let searchButton = document.getElementById('search-loop');
    let searchBar = document.querySelector('.search-bar');
    searchButton.addEventListener('click', function() {
        console.log('klasa nadana');
        searchBar.classList.toggle("active");
    });

})();