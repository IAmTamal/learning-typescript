//& Here we are defining the type of the object that the function is accepting
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "hitesh", isPaid: false });

//& Return type of function is an object here with name and price
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

createCourse();

//& We can create type for the object and use it in the functions as well
//& In the below function we are able to use the User type to define what the function will be accepting and returning

type User = {
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

function createUser2(user: User): User {
  return { name: "", email: "", isActive: true };
}

//& Read-only properties
//& We can make the properties of the object read-only by using the readonly keyword
//& That means we can't change the value of the property after the object is created

type Product = {
  readonly _id: string;
  name: string;
  price: number;
  isAvailable: boolean;
};

export {};
