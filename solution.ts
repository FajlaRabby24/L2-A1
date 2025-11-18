// * problem 1
type TFormatValue = string | number | boolean;
const formatValue = (value: TFormatValue): TFormatValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

// * problem 2
type TGetLength = string | unknown[];
const getLength = (value: TGetLength): number | string => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Please give a valid value! like string or array.";
  }
};

// * problem 3
interface IPerson {
  name: string;
  age: number;
  getDetails(): string;
}
class Person implements IPerson {
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
interface IFilterByRating {
  title: string;
  rating: number;
}
const filterByRating = (books: IFilterByRating[]): IFilterByRating[] => {
  return books.filter((book: IFilterByRating) => book.rating >= 4);
};

// * problem 5
interface IFilterActiveUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (
  users: IFilterActiveUsers[]
): IFilterActiveUsers[] => {
  return users.filter((user: IFilterActiveUsers) => user.isActive);
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
type IGetUniqueValues = (string | number)[];
const getUniqueValues = (
  arr1: IGetUniqueValues,
  arr2: IGetUniqueValues
): IGetUniqueValues => {
  const combineArr = [...arr1, ...arr2];
  const uniqueArr: IGetUniqueValues = [];

  // check value exists or not in unique array
  const exists = (array: IGetUniqueValues, value: number | string): boolean => {
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
interface ICalculateTotalPrice {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: ICalculateTotalPrice[]): number => {
  return products.reduce((acc: number, product: ICalculateTotalPrice) => {
    let productTotalPrice = product.price * product.quantity;

    if (product?.discount) {
      productTotalPrice -= (productTotalPrice * product?.discount) / 100;
    }

    acc += productTotalPrice;

    return acc;
  }, 0);
};
