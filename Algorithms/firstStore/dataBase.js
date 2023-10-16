var database = {
  products: [
    {
      name: "Polo Shirt",
      prices: {
        P: 29.99,
        M: 34.99,
        G: 39.99
      },
      stock: {
        P: {
          Blue: 20,
          White: 15,
          Red: 10
        },
        M: {
          Blue: 25,
          White: 20,
          Red: 15
        },
        G: {
          Blue: 30,
          White: 25,
          Red: 20
        }
      }
    },
    {
      name: "Social Shirt",
      prices: {
        P: 49.99,
        M: 54.99,
        G: 59.99
      },
      stock: {
        P: {
          White: 12,
          Black: 10,
          Blue: 8
        },
        M: {
          White: 15,
          Black: 12,
          Blue: 10
        },
        G: {
          White: 18,
          Black: 15,
          Blue: 12
        }
      }
    },
    {
      name: "Sports T-Shirt",
      prices: {
        P: 19.99,
        M: 24.99,
        G: 29.99
      },
      stock: {
        P: {
          Green: 25,
          Gray: 20,
          Black: 15
        },
        M: {
          Green: 30,
          Gray: 25,
          Black: 20
        },
        G: {
          Green: 35,
          Gray: 30,
          Black: 25
        }
      }
    }
  ]
};

console.log(database);