let productsCatalog = {
  "tshirt": {
    name: "T-Shirt",
    price: 19.99,
    description: "A simple cotton T-shirt.",
    stock: 100
  },

  "coffeeMug": {
    name: "Coffee Mug",
    price: 9.99,
    description: "A ceramic coffee mug for your hot beverages.",
    stock: 100
  },

  "smartphoneCase": {
    name: "SuperCase",
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
    name: "mcBook",
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

let allProducts = Object.keys(productsCatalog);


function stock(stockAction) {

  if (stockAction === "display") {
    for (let i = 0; i < allProducts.length; i++) {
      if (productsCatalog[allProducts[i]].options) {
        const allOptions = Object.keys(productsCatalog[allProducts[i]].options);
        console.log(`
.The product '${productsCatalog[allProducts[i]].name}' has in stock:`);
        
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
.The product '${productsCatalog[allProducts[i]].name}' has in stock: ${productsCatalog[allProducts[i]].stock}`);    
      }
    }
  } else if (stockAction === "add") {
    function addToStock(allProducts, quantity, option) {
      if (productsCatalog[allProducts]) {
        if (productsCatalog[allProducts].options) {
          const allOptions = Object.keys(productsCatalog[allProducts].options);
          const allDetails = Object.keys(productsCatalog[allProducts].options[allOptions[option]]);

          allDetails.forEach(allDetail => {
            console.log(allDetail);
          });
          
          
        } else {
          productsCatalog[allProducts].stock += quantity;
          console.log(productsCatalog[allProducts]);
        }
      }
    };
    addToStock("notebook", 10, 0);
  }
};

stock("add");



function addToCart(allProducts, name, quantity) {
  let cart = {};
  if (name === productsCatalog[allProducts]) {

  }

  //console.log(cart);
};

//addToCart();

function displayCart() {
  
};

function purchase() {
  
};
