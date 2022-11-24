myJson = `{
    "name": "Khalid Hossain Badhon",
    "email": "khalidhossainbadhon@gmail.com",
    "age": 22
}`;
console.log(myJson);
parsed = JSON.parse(myJson);
console.log(parsed.email);
