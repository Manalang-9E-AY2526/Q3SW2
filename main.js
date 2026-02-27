function GetDiscount() {
    let ogbud = document.getElementById("budgetInput").value;

    let discountedPrice = ogbud * 0.2;

    document.getElementById("disc-box").innerHTML = `
        <div class="container bg-black p-3 mt-3 rounded">
            <h4 class="text-white">Recommended Brands</h4>

            <button class="btn btn-warning mt-2">Acer</button>
            <button class="btn btn-warning mt-2">Lenovo</button>
            <button class="btn btn-warning mt-2">Asus</button>

            <h4 class="text-light mt-3">
                Eligible discount: 
                <span class="bg-primary p-1">₱${discountedPrice}</span>
            </h4>
        </div>
    `;
}

function GetLocation() {
    document.getElementById("address").innerHTML = `
        <div class="container bg-black p-3 mt-3 text-white rounded">
            <h4 class="text-white">Store Locations</h4>

            <h5 class="text-warning mt-3">ASUS</h5>
            <p>ASUS Concept Store – SM North EDSA, Quezon City</p>
            <p>ASUS Store – Glorietta 2, Makati City</p>

            <h5 class="text-warning mt-3">Lenovo</h5>
            <p>Lenovo Exclusive Store – SM North EDSA, Quezon City</p>
            <p>Lenovo Store – Greenhills Shopping Center, San Juan City</p>

            <h5 class="text-warning mt-3">Acer</h5>
            <p>Acer Concept Store – SM Megamall, Mandaluyong City</p>
            <p>Acer Store – SM Mall of Asia, Pasay City</p>
        </div>
    `;
}