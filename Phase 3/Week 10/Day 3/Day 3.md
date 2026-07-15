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

