const section = document.querySelector('.grid-card');

let allPosts = [];

const searchInput = document.querySelector('.search-data');
let searchText = '';

let imageIdStartValue = 304;

const fetchAllPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            allPosts = data;
            showCards();
        });
};

fetchAllPost();

searchInput.addEventListener('input', () => {
    searchText = searchInput.value.toLowerCase().trim();
    showCards(searchText);
});

const showCards = (searchText) => {
    let showedPosts = [];
    const itemCount = 10;
    if (searchText) {
        showedPosts = allPosts
            .filter((item) => item.title.includes(searchText))
            .slice(0, itemCount);
    } else {
        showedPosts = allPosts.slice(0, itemCount);
    }
    section.innerHTML = ''; // reset section
    if (showedPosts.length > 0) {
        displayedCards(showedPosts);
    } else {
        setTimeout(() => {
            alert("Data not found...")
        }, 100);

    }

};

const displayedCards = (arr) => {
    // create card elements
    arr.forEach((item) => {
        const card = document.createElement('div');
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('div');
        const desc = document.createElement('div');

        //classes
        card.className = 'card';
        imageDiv.className = 'image';
        image.src = `https://picsum.photos/id/${imageIdStartValue}/200/180`;
        imageIdStartValue++;
        title.className = 'title';
        desc.className = 'desc ';
        title.innerText = item.title;
        desc.innerText = item.body;

        //append
        imageDiv.appendChild(image);
        card.appendChild(imageDiv);
        card.appendChild(title);
        card.appendChild(desc);
        section.appendChild(card);
    });
};