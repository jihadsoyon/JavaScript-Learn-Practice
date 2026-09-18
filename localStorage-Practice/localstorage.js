const STORAGE_KEY = 'numbers';

const getNumbers = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};


const saveNumbers = (numbers) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(numbers));
};

const renderNumbers = () => {
    const numbers = getNumbers();
    const listContainer = document.getElementById('numberList');
    listContainer.innerHTML = '';

    if (numbers.length === 0) {
        listContainer.innerHTML = '<li>কোনো number নেই</li>';
        return;
    }

    numbers.forEach((num, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${num}</span>
            <button data-index="${index}" class="deleteBtn">Delete</button>
        `;
        listContainer.append(li);
    });
};

const addNumber = () => {
    const numbers = getNumbers();
    const newNumber = Math.ceil(Math.random() * 100);

    numbers.push(newNumber);
    saveNumbers(numbers);
    renderNumbers();
};

const deleteNumber = (index) => {
    const numbers = getNumbers();
    numbers.splice(index, 1);
    saveNumbers(numbers);
    renderNumbers();
};

const clearNumbers = () => {
    localStorage.removeItem(STORAGE_KEY);
    renderNumbers();
};

document.getElementById('numberList').addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        const index = e.target.dataset.index;
        deleteNumber(index);
    }
});

document.getElementById('addBtn').addEventListener('click', addNumber);
document.getElementById('clearBtn').addEventListener('click', clearNumbers);

renderNumbers();