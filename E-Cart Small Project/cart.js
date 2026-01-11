// Load cart when page opens
loadCart();

function loadCart() {
    let cart = getCart();
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";                     //it will remove old item so duplicate will not appear

    if (cart.length === 0) {
        cartDiv.innerText = "Cart is empty";
        return;
    }

    // cart.forEach((item, index) => {         //each item with its index

    //     //it will add in blank div tag
    //     cartDiv.innerHTML += `              
    //         <div style="border:1px solid #ccc; margin:10px; padding:10px;">
    //             <img src="${item.image}" width="80"><br>
    //             <b>${item.name}</b><br>
    //             Price: $${item.price}<br>
    //             Qty: ${item.quantity}<br>
    //             <button onclick="removeItem(${index})">Remove</button>
    //         </div>
    //     `;
    // });
     cart.forEach((item, index) => {
        console.log(item)
        console.log(index)
        // Create container div
        const itemDiv = document.createElement("div");
        itemDiv.style.border = "1px solid #ccc";
        itemDiv.style.margin = "10px";
        itemDiv.style.padding = "10px";

        // Image
        const img = document.createElement("img");
        img.src = item.image;
        img.width = 80;
        itemDiv.appendChild(img);
        itemDiv.appendChild(document.createElement("br"));

        // Name
        const name = document.createElement("b");
        name.innerText = item.name;
        itemDiv.appendChild(name);
        itemDiv.appendChild(document.createElement("br"));

        // Price
        const price = document.createElement("span");
        price.innerText = "Price: $" + item.price;
        itemDiv.appendChild(price);
        itemDiv.appendChild(document.createElement("br"));

        // Quantity
        const qty = document.createElement("span");
        qty.innerText = "Qty: " + item.quantity;
        itemDiv.appendChild(qty);
        itemDiv.appendChild(document.createElement("br"));

        // Remove Button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = function () {
            removeItem(index);
        };
        itemDiv.appendChild(removeBtn);

        // Append to cart container
        cartDiv.appendChild(itemDiv);
    });

}

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove one item
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);        //jab user remove click kre uske sath index aayega us particuler index wala element remove hoga
    saveCart(cart);             //new cart ko save kana vrna duplicate aa skte he
    loadCart();                 //every time load so our UI will update
}

// Clear full cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}