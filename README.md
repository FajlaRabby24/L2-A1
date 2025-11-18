### 1. TypeScript এ Interface এবং Type এর মধ্যে পার্থক্য?

TypeScript-এ object structure define করার সময় আমরা বেশিরভাগ ক্ষেত্রে interface বা type ব্যবহার করি। দুটোই দেখতে একই রকম মনে হলেও, ব্যবহার ও সুবিধার দিক থেকে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

#### Interface:

- কোনো object বা class-এর structure তৈরি করার জন্য বেশি ব্যবহার হয়।
- সহজে extend করা যায়।
- একই নামে একাধিক interface লিখলে TypeScript সেগুলোকে merge করে নেয়।
- বড় প্রজেক্টে structure maintain করা সহজ হয়।

```typescript
interface User {
  name: string;
  age: number;
}

// Interface extension
interface User {
  email?: string;
}

const person: User = {
  name: "Alex",
  age: 25,
  email: "alex@example.com",
};
```

#### Type:

- Type আরও flexible—object ছাড়াও union, intersection, primitive, tuple ইত্যাদি define করতে পারে।
- একবার কোনো type declare করলে পুনরায় একই নামে declare করা যায় না (no merging).
- Complex type বা বিভিন্ন type compose করতে সুবিধা হয়।

```typescript
type User = {
  name: string;
  age: number;
};

// Union type example
type Status = "success" | "error" | "pending";

// Intersection example
type Employee = User & {
  salary: number;
};

const emp: Employee = {
  name: "Sara",
  age: 28,
  salary: 50000,
};
```

### 2. keyof কীওয়ার্ড কী এবং কেন ব্যবহার করা হয়?

keyof হলো TypeScript-এর একটি operator যা কোনো object বা interface-এর সবগুলো key-এর union তৈরি করে। এটি পুরোপুরি compile-time এ কাজ করে এবং ভুল key ব্যবহারের সুযোগ কমায়।

#### Keyof:

- টাইপ-সেইফ key checking নিশ্চিত করে
- ভুল key ব্যবহারের ঝুঁকি কমায়
- বড় প্রজেক্টে maintainability বাড়ায়

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
}

type ProductKeys = keyof Product; // "id" | "title" | "price"

let key: ProductKeys;

key = "id"; // valid
key = "price"; // valid
// key = "stock"; // ❌ error: not a key of Product
```
