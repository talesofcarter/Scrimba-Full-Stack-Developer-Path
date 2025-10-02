type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1);
