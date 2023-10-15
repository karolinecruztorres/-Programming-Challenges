let productsCatalog = {
  "tshirt": {
    productName: "T-Shirt",
    price: 19.99,
    description: "A simple cotton T-shirt.",
    stock: 100
  },

  "coffeeMug": {
    productName: "Coffee Mug",
    price: 9.99,
    description: "A ceramic coffee mug for your hot beverages.",
    stock: 100
  },

  "smartphoneCase": {
    productName: "SuperCase",
    price: 24.99,
    description: "A smartphone case that you can customize with different colors and materials.",
    options: {
      colors: {
        "Red": 50,
        "Blue": 30,
        "Black": 20
      },
      materials: {
        "Plastic": 40,
        "Leather": 40,
        "Silicone": 20
      }
    }
  },

  "notebook": {
    productName: "mcBook",
    price: 999.99,
    description: "A customizable notebook with various options for processor, RAM, and storage.",
    options: {
      processors: {
        "Intel i5": 30,
        "Intel i7": 40,
        "AMD Ryzen 5": 30
      },
      ram: {
        "8GB": 20,
        "16GB": 40,
        "32GB": 40
      },
      storage: {
        "256GB SSD": 30,
        "512GB SSD": 40,
        "1TB HDD": 30
      }
    }
  }
};

const allProducts = Object.keys(productsCatalog);

function stock(stockAction) {
  if (stockAction === "display") {
    for (let i = 0; i < allProducts.length; i++) {
      if (productsCatalog[allProducts[i]].options) {
        const allOptions = Object.keys(productsCatalog[allProducts[i]].options);
        console.log(`
.The product '${productsCatalog[allProducts[i]].productName}' has in stock:`);
        
        for (let j = 0; j < allOptions.length; j++) {
          const optionName = allOptions[j];
          const option = Object.keys(productsCatalog[allProducts[i]].options[optionName]);
          console.log(`
  ${optionName}`);
  
          for (let k = 0; k < option.length; k++) {
            const optionValue = option[k];
            console.log(`- ${optionValue}: ${productsCatalog[allProducts[i]].options[optionName][optionValue]}`);
          }
        }
      } else {
        console.log(`
.The product '${productsCatalog[allProducts[i]].productName}' has in stock: ${productsCatalog[allProducts[i]].stock}`);    
      }
    }
  } else if (stockAction === "add") {
    function addToStock(allProducts, quantity, option) {
      if (productsCatalog[allProducts]) {
        if (productsCatalog[allProducts].options) {
          const allOptions = Object.keys(productsCatalog[allProducts].options);
          const allDetails = Object.keys(productsCatalog[allProducts].options[allOptions[option]]);
          
          console.log(allDetails);
        } else {
          productsCatalog[allProducts].stock += quantity;
          console.log(productsCatalog[allProducts]);
        }
      }
    };
    addToStock("notebook", 10, 0);
  }
};

//stock("display");


function addToCart(allProducts, cartQuantity) {
  let shoppingCart = {};
  if (productsCatalog[allProducts].options) {
    shoppingCart = {productName: productsCatalog[allProducts].productName, quantity: cartQuantity, unitPrice: productsCatalog[allProducts].price, totalItemPrice: parseFloat((productsCatalog[allProducts].price *= cartQuantity).toFixed(2))};
    

    // productName: 'mcBook',
    // processor: "Intel i7" (and -1 unit of stock),
    // ram: "32GB" (and -1 unit of stock),
    // storage: "512GB SSD" (and -1 unit of stock),
    // quantity: 3,
    // unitPrice: 999.99,
    // totalItemPrice: 2999.97
    
    console.log(shoppingCart);
  } else {
    shoppingCart = {productName: productsCatalog[allProducts].productName, quantity: cartQuantity, unitPrice: productsCatalog[allProducts].price, totalItemPrice: parseFloat((productsCatalog[allProducts].price *= cartQuantity).toFixed(2))};
    console.log(shoppingCart);
  }
};

addToCart("notebook", 3);

function displayCart() {
  //  totalCartPrice 
};

function purchase() {
  
};