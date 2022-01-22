const employees = [
  {
    id: 01,
    first_name: 'Pratiksha',
    last_name: 'Bhosale',
    phone: 0987654321,
    email: 'pratiksha@aceonics.com',
  },
  {
    id: 02,
    first_name: 'Anjali',
    last_name: 'Chopde',
    phone: 0987654321,
    email: 'anjali@aceonivcs.com',
  },
];

employees.forEach((employee) => {
  console.log(
    employee.id,
    employee.first_name,
    employee.last_name,
    employee.phone,
    employee.email
  );
});
