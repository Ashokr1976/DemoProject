
document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');

    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const posts = await response.json();
            displayPosts(posts);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    function displayPosts(posts) {
        postsList.innerHTML = posts
            .map(post => `<li><h2>${post.title}</h2><p>${post.body}</p></li>`)
            .join('');
    }

    fetchPosts();
});


document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data

    data.slice(0, 5).forEach(item => {
        const dataElement = document.createElement('div');
        dataElement.classList.add('data-item');
        dataElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        `;
        dataContainer.appendChild(dataElement);
    });
}