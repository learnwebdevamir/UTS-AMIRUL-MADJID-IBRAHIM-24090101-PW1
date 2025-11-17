const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20}
];


function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}


const CORRECT_EMAIL = "madjidamirul@gmail.com"; 
const CORRECT_USERNAME_ALTERNATIVE = "learnwebdevamir"; 
const CORRECT_PASSWORD = "24090101";

function setupLoginPage() {
    const usernameInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password'); 
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (!loginForm || !usernameInput || !passwordInput || !errorMessage) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputIdentifier = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (inputIdentifier === '' || password === '') {
            errorMessage.textContent = 'Username/Email dan Password (NIM) tidak boleh kosong!';
            return;
        }

        const isIdentifierCorrect = (
            inputIdentifier === CORRECT_EMAIL || 
            inputIdentifier === CORRECT_USERNAME_ALTERNATIVE
        );

        const isPasswordCorrect = (password === CORRECT_PASSWORD);

        if (isIdentifierCorrect && isPasswordCorrect) {
            errorMessage.textContent = ''; 
            alert('Login berhasil'); 
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Username/Email atau Password (NIM) salah!';
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });
}

function updateDashboardSummary() {
    
    if (!document.getElementById('totalProducts')) return;

    document.getElementById('totalProducts').textContent = summary.totalProducts; // [cite: 140]
    document.getElementById('totalSales').textContent = summary.totalSales; // [cite: 140]
    document.getElementById('totalRevenue').textContent = formatRupiah(summary.totalRevenue); // [cite: 140]
}


function editProduct(name) {
    alert(`Edit produk (${name})`);
}

function deleteProduct(id) {
    if (confirm("Yakin hapus produk ini?")) {
        const initialLength = products.length;
        products = products.filter(product => product.id !== id);
        
        if (products.length < initialLength) {
            renderProductTable(); 
        }
    }
}

function renderProductTable() {
    const tableBody = document.querySelector('#product-table tbody');
    if (!tableBody) return; 

    tableBody.innerHTML = ''; 

    products.forEach((product, index) => {
        const row = tableBody.insertRow();

        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = formatRupiah(product.price);
        row.insertCell().textContent = product.stock;

        const actionCell = row.insertCell();
        actionCell.classList.add('action-buttons');
        
        const editBtn = document.createElement('button');
        editBtn.className = 'btn-edit';
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editBtn.onclick = () => editProduct(product.name); 

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
        deleteBtn.onclick = () => deleteProduct(product.id); 

        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupLoginPage(); 
    updateDashboardSummary(); 
    renderProductTable(); 
});
