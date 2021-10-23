const { json } = require('express');
const express = require('express');
const faker = require('faker');
const app = express();

const createUser = () => {
  const newFakeUser = {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  return newFakeUser;
}
const createCompany = () => {
  const newFakeCo =
  {
    id: faker.random.number(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return newFakeCo;
}


app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json([{ user: createUser() }, { company: createCompany() }]);
});

app.listen(8000, () => console.log('Success on 8000'));