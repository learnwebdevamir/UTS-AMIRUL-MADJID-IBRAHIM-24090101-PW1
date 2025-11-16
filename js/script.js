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


function setupLoginPage() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password'); 
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); 

        if (email === '' || password === '') {
            errorMessage.textContent = 'Email dan Password (NIM) tidak boleh kosong!'; 
            return;
        }

        l
        errorMessage.textContent = ''; 
        alert('Login berhasil'); 
        window.location.href = 'dashboard.html'; 
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