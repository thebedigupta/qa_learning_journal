export const generateUniqueEmail = (): string => 
    `testuser_${Date.now()}@mailtest.com`;

export const testUser = {
    name : 'Automation User',
    password : 'Test@1234',
    title : 'Mr',
    dob : {day: '15',month:'January',year: '1995'},
    firstName : 'Automation',
    lastName : 'User',
    company: 'Test Corp',
    address1 : '123 MG Road',
    address2 : 'Block B',
    country : 'India',
    state: 'Delhi',
    city : '110001',
    mobile: '9876543210'
}

export const payment ={
    nameOnCard : 'Automation User',
    cardNumber : '9876543210112345',
    cvc : '123',
    expiryMonth : '12',
    expiryYear : '2026'
}

export const searchTerms = ['Top','Tshirt','Jean','Dress','Saree'];

export const invalidUser = {
    email : 'notregistered@test.com',
    password : 'wrongpass123'
}