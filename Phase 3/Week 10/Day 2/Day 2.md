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

