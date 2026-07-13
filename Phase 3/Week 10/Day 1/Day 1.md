Day 60 is a **pure theory day** — HTTP methods, status codes, request/response anatomy, authentication. Here's everything to read and know, structured so you can move fast.

---

## Reading (do this first, ~2 hrs)

**restfulapi.net** — read these pages in order:

1. `restfulapi.net/rest-architectural-constraints/` — skim, 10 min
2. `restfulapi.net/http-methods/` — read fully
3. `restfulapi.net/http-status-codes/` — read fully
4. `restfulapi.net/rest-api-request-anatomy/` — read fully
5. `restfulapi.net/rest-api-authentication-mechanisms/` — read fully

---

## What to Actually Memorize

**HTTP Methods** (one-liner each):

| Method | Purpose | Has Body? |
|--------|---------|-----------|
| GET | Read a resource | No |
| POST | Create a resource | Yes |
| PUT | Replace entire resource | Yes |
| PATCH | Partial update | Yes |
| DELETE | Remove a resource | No |

**Status Codes** (group them, not individually):

- **2xx Success** → 200 OK, 201 Created, 204 No Content
- **4xx Client fault** → 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests
- **5xx Server fault** → 500 Internal Server Error, 503 Service Unavailable

Key distinction you'll be asked: **401 vs 403** — 401 means "not logged in", 403 means "logged in but not allowed."

**Request anatomy:**

```
Method  → GET
URL     → https://reqres.in/api/users/2
Headers → Content-Type: application/json
          Authorization: Bearer eyJhbGci...
Body    → { "name": "Bedi" }   ← only POST/PUT/PATCH
Query   → /api/users?page=2&per_page=6
```

**Response anatomy:**

```
Status Code → 200
Headers     → Content-Type: application/json
Body        → { "data": { "id": 2, "name": "Janet" } }
```

**Authentication types:**

| Type | How it's sent |
|------|--------------|
| API Key | Header: `x-api-key: abc123` or query param `?api_key=abc123` |
| Bearer Token | Header: `Authorization: Bearer {token}` |
| Basic Auth | Header: `Authorization: Basic base64(user:pass)` |

