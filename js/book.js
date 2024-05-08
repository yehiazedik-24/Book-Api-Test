var fill = document.getElementById('fill');
fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=uSmivxcsANCV6UQAKyi8ZObKoBRVzfMv')
    .then((response) => response.json())
    .then((data) => {
        const books = data.results.lists[0].books; 
        books.forEach((book) => {
            var show = `
                <div class="col-md-3 swiper-slide box">
                    <div class="icons">
                        <a href="#" class="fas fa-search"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <div class="image">
                        <img src="${book.book_image}" alt="${book.title}" class="img-fluid" width="250">
                    </div>
                    <div class="content">
                        <h3>${book.title}</h3>
                        <div class="author">${book.author}</div>
                        <div class="price">$${book.price} <span>${book.publisher}</span></div>
                        <button class="btn btn-outline-warning my-4">Add to Cart</button>
                    </div>
                </div>
            `;
            fill.insertAdjacentHTML("beforeend", show);
        });
    })
    .catch((error) => {
        console.error('Error fetching book data:', error);
    });

