1.TypeScript এ Interface এবং Type এর মধ্যে পার্থক্য?

TypeScript-এ object structure define করার সময় আমরা বেশিরভাগ ক্ষেত্রে interface বা type ব্যবহার করি। দুটোই দেখতে একই রকম মনে হলেও, ব্যবহার ও সুবিধার দিক থেকে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

Interface:
কোনো object বা class-এর structure তৈরি করার জন্য বেশি ব্যবহার হয়।
সহজে extend করা যায়।
একই নামে একাধিক interface লিখলে TypeScript সেগুলোকে merge করে নেয়।
বড় প্রজেক্টে structure maintain করা সহজ হয়।
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
