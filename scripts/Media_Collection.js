// ---------------------
// PART 1: JSON DATA
// ---------------------
const bookJSON = `
[
    {
        "title": "Atomic Habits",
        "author": "James Clear",
        "price": 16.99,
        "image": "../pictures/AtomicHabits.jpg"
    },
    {
        "title": "The 48 Laws of Power",
        "author": "Robert Greene",
        "price": 18.50,
        "image": "../pictures/Power.jpg"
    },
    {
        "title": "How to Win Friends",
        "author": "Dale Carnegie",
        "price": 12.99,
        "image": "../pictures/HTWF.jpg"
    }
]
`;

class Book {
    #price;

    constructor(title, author, price, image) {
        this.title = title;
        this.author = author;
        this.#price = price;
        this.image = image;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            console.warn("Price cannot be negative. Setting to 0.");
            this.#price = 0;
        } else {
            this.#price = value;
        }
    }

    createHTMLElement() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("book-card");

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;

        const titleEl = document.createElement("h2");
        titleEl.textContent = this.title;

        const authorEl = document.createElement("p");
        authorEl.textContent = `By: ${this.author}`;
        authorEl.classList.add("author");

        const priceEl = document.createElement("p");
        priceEl.textContent = `$${this.price}`;
        priceEl.classList.add("price");

        // Append everything
        wrapper.appendChild(img);
        wrapper.appendChild(titleEl);
        wrapper.appendChild(authorEl);
        wrapper.appendChild(priceEl);

        return wrapper;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const bookArray = JSON.parse(bookJSON);

    // Convert JSON → Book objects
    const books = bookArray.map(b => new Book(b.title, b.author, b.price, b.image));

    // Select container from HTML
    const container = document.getElementById("media-container");

    // Append each book card
    books.forEach(book => {
        container.appendChild(book.createHTMLElement());
    });

});
