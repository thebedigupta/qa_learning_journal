Day 63 builds on yesterday's collection — you go deeper with **request chaining, negative tests, multiple environments, and the Collection Runner**.

---

## Part 1 — Request Chaining (30 min)

Yesterday's POST saved `userId` to the environment. Now wire that into other requests so they use real data, not hardcoded IDs.

Update your **GET single user** URL:
```
GET {{baseUrl}}/api/users/{{userId}}
```

Update your **PUT** and **DELETE** URLs the same way:
```
PUT {{baseUrl}}/api/users/{{userId}}
DELETE {{baseUrl}}/api/users/{{userId}}
```

Now when POST runs first and saves the ID, every subsequent request uses it automatically. This is how real test suites chain dependent calls.

---

## Part 2 — Negative Test Cases (45 min)

Add these 3 new requests to your collection under a folder called `negative-tests`.

**GET non-existent user**
```
GET {{baseUrl}}/api/users/999
```
Tests tab:
```javascript
pm.test("Status is 404", () => {
    pm.response.to.have.status(404);
});
pm.test("Body is empty object", () => {
    const json = pm.response.json();
    pm.expect(json).to.deep.equal({});
});
```

---

**POST register — missing password**
```
POST {{baseUrl}}/api/register
```
Body:
```json
{
    "email": "sydney@fife"
}
```
Tests tab:
```javascript
pm.test("Status is 400", () => {
    pm.response.to.have.status(400);
});
pm.test("Error message exists", () => {
    const json = pm.response.json();
    pm.expect(json.error).to.be.a('string');
});
```

---

**POST login — missing password**
```
POST {{baseUrl}}/api/login
```
Body:
```json
{
    "email": "peter@klaven"
}
```
Tests tab:
```javascript
pm.test("Status is 400", () => {
    pm.response.to.have.status(400);
});
pm.test("Returns error key", () => {
    const json = pm.response.json();
    pm.expect(json).to.have.property('error');
});
```

---
Day 63 builds on yesterday's collection — you go deeper with **request chaining, negative tests, multiple environments, and the Collection Runner**.

---

## Part 1 — Request Chaining (30 min)

Yesterday's POST saved `userId` to the environment. Now wire that into other requests so they use real data, not hardcoded IDs.

Update your **GET single user** URL:
```
GET {{baseUrl}}/api/users/{{userId}}
```

Update your **PUT** and **DELETE** URLs the same way:
```
PUT {{baseUrl}}/api/users/{{userId}}
DELETE {{baseUrl}}/api/users/{{userId}}
```

Now when POST runs first and saves the ID, every subsequent request uses it automatically. This is how real test suites chain dependent calls.

---

## Part 2 — Negative Test Cases (45 min)

Add these 3 new requests to your collection under a folder called `negative-tests`.

**GET non-existent user**
```
GET {{baseUrl}}/api/users/999
```
Tests tab:
```javascript
pm.test("Status is 404", () => {
    pm.response.to.have.status(404);
});
pm.test("Body is empty object", () => {
    const json = pm.response.json();
    pm.expect(json).to.deep.equal({});
});
```

---

**POST register — missing password**
```
POST {{baseUrl}}/api/register
```
Body:
```json
{
    "email": "sydney@fife"
}
```
Tests tab:
```javascript
pm.test("Status is 400", () => {
    pm.response.to.have.status(400);
});
pm.test("Error message exists", () => {
    const json = pm.response.json();
    pm.expect(json.error).to.be.a('string');
});
```

---

**POST login — missing password**
```
POST {{baseUrl}}/api/login
```
Body:
```json
{
    "email": "peter@klaven"
}
```
Tests tab:
```javascript
pm.test("Status is 400", () => {
    pm.response.to.have.status(400);
});
pm.test("Returns error key", () => {
    const json = pm.response.json();
    pm.expect(json).to.have.property('error');
});
```

---

