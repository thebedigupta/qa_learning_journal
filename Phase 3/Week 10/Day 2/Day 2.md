Day 62 is your first **hands-on Postman day** on reqres.in. Here's exactly what to do.

---

## Setup (15 min)

- Download Postman: `postman.com/downloads`
- Open it, create a free account
- Go to `reqres.in` — read the available endpoints on the homepage

---

## Step 1 — Create a Collection + Environment

**Collection:**
New → Collection → name it `reqres-api-suite`

**Environment** (so you never hardcode URLs):
Environments → Add → name it `reqres-env`
Add one variable:

| Variable | Initial Value |
|----------|--------------|
| `baseUrl` | `https://reqres.in` |

Set this environment as active (top-right dropdown).

Now every request URL starts with `{{baseUrl}}` instead of the full domain.

---

## Step 2 — The 5 CRUD Requests

Build these **inside your collection**, one by one.

**1. GET all users**
```
GET {{baseUrl}}/api/users?page=2
```
Tests tab:
```javascript
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});
pm.test("Response has data array", () => {
    const json = pm.response.json();
    pm.expect(json.data).to.be.an('array');
    pm.expect(json.data.length).to.be.greaterThan(0);
});
```

---

**2. GET single user**
```
GET {{baseUrl}}/api/users/2
```
Tests tab:
```javascript
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});
pm.test("User id is 2", () => {
    const json = pm.response.json();
    pm.expect(json.data.id).to.equal(2);
});
pm.test("Email exists", () => {
    const json = pm.response.json();
    pm.expect(json.data.email).to.be.a('string');
});
```

---

**3. POST create user**
```
POST {{baseUrl}}/api/users
```
Body → raw → JSON:
```json
{
    "name": "Bedi",
    "job": "SDET"
}
```
Tests tab:
```javascript
pm.test("Status is 201", () => {
    pm.response.to.have.status(201);
});
pm.test("Name matches", () => {
    const json = pm.response.json();
    pm.expect(json.name).to.equal("Bedi");
});
pm.test("ID is assigned", () => {
    const json = pm.response.json();
    pm.expect(json.id).to.exist;
});

// Save the created ID for later use
pm.environment.set("userId", pm.response.json().id);
```

---

**4. PUT update user**
```
PUT {{baseUrl}}/api/users/2
```
Body → raw → JSON:
```json
{
    "name": "Bedi Updated",
    "job": "Senior SDET"
}
```
Tests tab:
```javascript
pm.test("Status is 200", () => {
    pm.response.to.have.status(200);
});
pm.test("Job is updated", () => {
    const json = pm.response.json();
    pm.expect(json.job).to.equal("Senior SDET");
});
pm.test("updatedAt exists", () => {
    const json = pm.response.json();
    pm.expect(json.updatedAt).to.exist;
});
```

---

**5. DELETE user**
```
DELETE {{baseUrl}}/api/users/2
```
Tests tab:
```javascript
pm.test("Status is 204", () => {
    pm.response.to.have.status(204);
});
pm.test("Body is empty", () => {
    pm.expect(pm.response.text()).to.be.empty;
});
```

---

## Step 3 — Pre-request Script for Dynamic Data

On your POST request, switch to **Pre-request Script** tab:
```javascript
const timestamp = new Date().getTime();
pm.environment.set("dynamicName", `User_${timestamp}`);
pm.environment.set("dynamicJob", "QA Engineer");
```

Then update your POST body to use these:
```json
{
    "name": "{{dynamicName}}",
    "job": "{{dynamicJob}}"
}
```

Every run now creates a unique user name automatically.

---

## Step 4 — Run the Collection

Click your collection → Run → select `reqres-env` → Run.

All 5 requests should execute in sequence and all tests should pass green.

---

## Day Complete Check

- 5 requests built inside one collection
- Every request has at least 2 assertions in Tests tab
- Environment variable `baseUrl` used in every URL (no hardcoded domain)
- Pre-request script sets dynamic data on POST
- Collection Runner shows all green
