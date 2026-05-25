// 1. Create an enum "Environment" with: Dev, Staging, Production
// 2. Create an enum "HttpMethod" with: GET, POST, PUT, DELETE (string values)
// 3. Create a generic interface ApiRequest<T> with:
//    - endpoint: string
//    - method: HttpMethod
//    - environment: Environment
//    - payload?: T  (optional generic)
// 4. Create a generic function sendRequest<T>(request: ApiRequest<T>): string
//    - returns: "Sending GET to /booking in Staging"
// 5. Call it with two different payload types and log the result.

// Exercise 1

enum Environment {
  Dev = 'DEV',
  Staging = 'STAGING',
  Production = 'PRODUCTION',
}

// Exercise 2

enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

// Exercise 3

interface ApiRequest<T> {
  endpoint: string;
  method: HttpMethod;
  environment: Environment;
  payload?: T;
}

// Exercise 4

function sendRequest<T>(request: ApiRequest<T>): string {
  return `Sending ${request.method} to ${request.endpoint} in ${request.environment}`;
}

// Exercise 5

console.log(
  sendRequest({
    endpoint: '/booking',
    method: HttpMethod.Get,
    environment: Environment.Staging,
  }),
);
console.log(
  sendRequest({
    endpoint: '/user',
    method: HttpMethod.Post,
    environment: Environment.Production,
    payload: { name: 'John Doe', age: 30 },
  }),
);
