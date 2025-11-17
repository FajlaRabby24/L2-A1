// * problem 1
type TProblem1 = string | number | boolean;
const formatValue = (value: TProblem1): TProblem1 => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

// * problem 2
type TProblem2 = string | unknown[];
const getLength = (value: TProblem2): number | string => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Please give a valid value! like string or array.";
  }
};

// * problem 3
interface TProblem3 {
  name: string;
  age: number;
  getDetails(): string;
}
class Person implements TProblem3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //  getDetails
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// * problem 4
type TProblem4 = {
  title: string;
  rating: number;
};
const filterByRating = (books: TProblem4[]): TProblem4[] => {
  return books.filter((book: TProblem4) => book.rating >= 4);
};

// * problem 5
type TProblem5 = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: TProblem5[]): TProblem5[] => {
  return users.filter((user: TProblem5) => user.isActive);
};

// * problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

// * problem 7
type TProblem7 = (string | number)[];
const getUniqueValues = (arr1: TProblem7, arr2: TProblem7): TProblem7 => {
  const combineArr = [...arr1, ...arr2];
  const uniqueArr: TProblem7 = [];

  // check value exists or not in unique array
  const exists = (array: TProblem7, value: number | string): boolean => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < combineArr.length; i++) {
    if (!exists(uniqueArr, combineArr[i])) {
      uniqueArr[uniqueArr.length] = combineArr[i];
    }
  }

  return uniqueArr;
};

// * problem 8
interface TProblem8 {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: TProblem8[]): number => {
  return products.reduce((acc: number, product: TProblem8) => {
    let productTotalPrice = product.price * product.quantity;

    if (product?.discount) {
      productTotalPrice -= (productTotalPrice * product?.discount) / 100;
    }

    acc += productTotalPrice;

    return acc;
  }, 0);
};
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
