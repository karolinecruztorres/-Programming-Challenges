let cars = {
  "ABC123": {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Silver",
    engine: {
      cylinders: 4,
      capacity: 2.0,
      type: "Gasoline"
    },
    features: ["Air conditioning", "Sound system", "Power windows", "Power locks"],
    owner: {
      name: "John",
      age: 30,
      address: {
        street: "Main Street",
        city: "City A",
        state: "State X"
      }
    },
    revisions: [
      { date: "2022-01-15", mileage: 10000, description: "Oil change" },
      { date: "2022-07-22", mileage: 20000, description: "Air filter replacement" }
    ],
    insurance: {
      insurer: "InsuranceXYZ",
      policyNumber: "A123456789",
      coverages: ["Theft", "Collision", "Third-party damage"]
    }
  },

  "XYZ789": {
    brand: "Honda",
    model: "Civic",
    year: 2023,
    color: "Black",
    engine: {
      cylinders: 4,
      capacity: 1.8,
      type: "Gasoline"
    },
    features: ["Air conditioning", "Power windows", "Power locks", 'Sound system'],
    owner: {
      name: "Margot",
      age: 28,
      address: {
        street: "Secondary Street",
        city: "City B",
        state: "State Y"
      }
    },
    revisions: [
      { date: "2021-03-10", mileage: 8000, description: "General checkup" },
      { date: "2021-09-05", mileage: 16000, description: "Oil change" }
    ],
    insurance: {
      insurer: "InsuranceABC",
      policyNumber: "B987654321",
      coverages: ["Theft", "Third-party damage"]
    }
  },

  "XYZ790": {
    brand: "Honda",
    model: "Civic",
    year: 2021,
    color: "Blue",
    engine: {
      cylinders: 4,
      capacity: 1.8,
      type: "Gasoline"
    },
    features: ["Air conditioning", "Power windows", "Power locks"],
    owner: {
      name: "Margot",
      age: 28,
      address: {
        street: "Secondary Street",
        city: "City B",
        state: "State Y"
      }
    },
    revisions: [
      { date: "2022-05-20", mileage: 18000, description: "Air filter replacement" },
      { date: "2022-09-17", mileage: 26000, description: "General checkup" }
    ],
    insurance: {
      insurer: "InsuranceABC",
      policyNumber: "B987654322",
      coverages: ["Theft", "Third-party damage", "Collision"]
    }
  }
};

const allLicensePlates = Object.keys(cars);

function ownersData() {
  for (let i = 0; i < allLicensePlates.length; i++) {
    console.log(`Details of the owner of the car with license plate ${allLicensePlates[i]}:
    - Name: ${cars[allLicensePlates[i]].owner.name}
    - Age: ${cars[allLicensePlates[i]].owner.age}
    - Adress: ${cars[allLicensePlates[i]].owner.address.street}, ${cars[allLicensePlates[i]].owner.address.city}, ${cars[allLicensePlates[i]].owner.address.state}.`
    );
  }
};

function changeData(licensePlate, street, city, state) {
  if (cars[licensePlate]) {
    cars[licensePlate].owner.address.street = street;
    cars[licensePlate].owner.address.city = city;
    cars[licensePlate].owner.address.state = state;
  } else {
    console.log("There is no car with this license plate in our database.");
  }
};

function changeInsurance(licensePlate, insurer, policyNumber, ...coverages) {
  if (cars[licensePlate]) {
    cars[licensePlate].insurance.insurer = insurer;
    cars[licensePlate].insurance.policyNumber = policyNumber;
    cars[licensePlate].insurance.coverages = coverages;
  } else {
    console.log("There is no car with this license plate in our database.");
  }
}; 

function sellCar(licensePlate, formerOwner, name, age, street, city, state ) {
  if (cars[licensePlate] && cars[licensePlate].owner.name === formerOwner) {
    cars[licensePlate].owner.name = name;
    cars[licensePlate].owner.age = age;
    changeData(licensePlate, street, city, state);
    changeInsurance(licensePlate, null, null, null);
  } else {
    console.log("The data entered is incorrect.");
  }
};

sellCar("XYZ790", "Margot", "Karoline", 30, "street", "city", "state");

changeInsurance("XYZ790", "Bradesco", "B987654001", "Theft", "Total Damage");

console.log(cars.XYZ790);