const info = [
    {
        name: `Sumant`,
        address: `Pune`,
        age: 25
    },
    {
        name: `Aniriddha`,
        address: `Pune`,
        age: 28
    },
    {
        name: `Ishaan`,
        address: `Pune`,
        age: 23
    },
];

for(let people of info){
    const name = people.name;
    const address = people.address;
    const age = people.age;
    console.log(name, address, age);
}