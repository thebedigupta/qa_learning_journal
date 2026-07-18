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

## Part 3 — Multiple Environments (30 min)

Yesterday you only had `reqres-env`. Now create a second to simulate having dev/staging setups — a real-world pattern.

Environments → Add → `reqres-staging`

| Variable | Value |
|----------|-------|
| `baseUrl` | `https://reqres.in` |
| `env` | `staging` |

Add this test to your GET all users request:
```javascript
pm.test("Correct environment loaded", () => {
    pm.expect(pm.environment.get("env")).to.exist;
});
```

Switch between environments in the top-right dropdown and re-run — the same collection works across both. This is the point: one collection, many environments.

---

## Part 4 — Successful Auth Requests (30 min)

Add these under a folder called `auth-tests`.

**POST register — success**
```
POST {{baseUrl}}/api/register
```
Body:
```json
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```
Tests tab:
```javascript
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});
pm.test("Token is returned", () => {
    const json = pm.response.json();
    pm.expect(json.token).to.be.a('string');
});

// Save token for next request
pm.environment.set("authToken", pm.response.json().token);
```

---

**POST login — success**
```
POST {{baseUrl}}/api/login
```
Body:
```json
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```
Tests tab:
```javascript
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});
pm.test("Token saved matches", () => {
    const json = pm.response.json();
    pm.expect(json.token).to.equal(pm.environment.get("authToken"));
});
```

---

## Part 5 — Run the Full Collection (15 min)

Collection → Run collection → select `reqres-env` → Run.

You should see something like: **12 requests, 20+ assertions, all green**.

If anything fails, read the test name — it'll tell you exactly which assertion broke.


