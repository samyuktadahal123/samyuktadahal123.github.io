// --- Global Variables & Keys ---
let tasks = [];
const localKey = 'myTodoList';
const sessionKey = 'sessionTaskCount';
const cookieKey = 'themePreference';
const apiURL = 'https://dog.ceo/api/breeds/image/random'; // Reliable API for image output

// --- Part 1: To-Do List with Local Storage (30 points) ---

function saveTasks() {
    // Store the list as a JSON string
    localStorage.setItem(localKey, JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index); 

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    });
}

function getTasks() {
    // Retrieve and render the list on page load
    const storedTasks = localStorage.getItem(localKey);
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
}

function addTask(event) {
    // CRUCIAL: Stop the form from submitting and refreshing the page
    event.preventDefault(); 
    
    const input = document.getElementById('task-input');
    const newTask = input.value.trim();

    if (newTask) {
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        input.value = '';
        
        // INTEGRATION: Call Part 2 logic
        incrementSessionCount(); 
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// --- Part 2: Session Storage for Interaction Tracking (25 points) ---

function updateSessionCountDisplay() {
    // Display the total number of tasks added in the current session
    let count = sessionStorage.getItem(sessionKey) || 0; 
    document.getElementById('session-count').textContent = count;
}

function incrementSessionCount() {
    // Increment and store the number of tasks added in session storage
    let count = parseInt(sessionStorage.getItem(sessionKey) || 0); 
    count++; 
    sessionStorage.setItem(sessionKey, count.toString()); 
    updateSessionCountDisplay(); 
}

// --- Part 3: Theme Persistence with Cookies (25 points) ---

function setCookie(name, value, days = 365) {
    // Saves the theme preference in a cookie
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/"; 
}

function getCookie(name) {
    // Retrieves the saved theme preference
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function applyTheme() {
    // Apply the saved theme on page load
    const savedTheme = getCookie(cookieKey);
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode'); 
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
}

function toggleTheme() {
    // Switches between light and dark mode
    const body = document.body;
    let newTheme;
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        newTheme = 'light';
    } else {
        body.classList.add('dark-mode');
        newTheme = 'dark';
    }

    setCookie(cookieKey, newTheme); 
    applyTheme(); 
}

// --- Part 4: REST API Integration with Promises (.then().catch()) (20 points) ---

function fetchAndDisplayAPI() {
    const outputElement = document.getElementById('api-output');
    outputElement.textContent = 'Fetching motivational data...';

    // Fetch the data using the Promise.then() syntax
    fetch(apiURL)
        .then(function(response) {
            // Check for HTTP errors
            if (!response.ok) {
                // Handle errors by throwing an error to trigger the catch block
                throw new Error('HTTP error! Status: ' + response.status);
            }
            // Return the JSON parsing promise
            return response.json();
        })
        .then(function(data) {
            // Success: Display the image data
            const imageUrl = data.message; 
            
            outputElement.innerHTML = `<img src="${imageUrl}" alt="A random dog" style="max-width: 300px; height: auto;">`;
        })
        .catch(function(error) {
            // Error handling: Display a fallback message
            console.error("API Fetch Error:", error);
            outputElement.textContent = 'Oh no! Could not load the image. Displaying fallback message.';
        });
}


// --- INITIALIZATION (Run on page load) ---
document.addEventListener('DOMContentLoaded', () => {
    // Attach listener for adding tasks
    document.getElementById('todo-form').addEventListener('submit', addTask);
    
    // Load persisted data for all parts
    getTasks(); 
    updateSessionCountDisplay(); 
    applyTheme();
    fetchAndDisplayAPI();

    // Attach listener for theme toggle and API refresh
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('refresh-api').addEventListener('click', fetchAndDisplayAPI);
});