// ADD TO CART
function addToCart(id) {
  const name = document.getElementById("name" + id).innerText; //it will give name
  const priceText = document.getElementById("price" + id).innerText; //it will give price
  const img = document.getElementById("img" + id).src; //it will give img

  const price = Number(priceText.replace("$", "")); //it will remove $ sign and convert into number

  //it will give product list  if product available in cart an if not it will give empty list
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingProduct = cart.find((item) => item.id === id); //it find perticulaer item of id

  if (existingProduct) {
    //if item exist
    existingProduct.quantity++; //it will increase the quantity
  } else {
    //if not
    cart.push({
      //it will add item in list
      id: id,
      name: name,
      price: price,
      image: img,
      quantity: 1,
    });
  }

  //at the end key is cart and  JSON.stringify(cart) this is object stores in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}