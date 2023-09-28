# thejscookie

`thejscookie` is a simple JavaScript library for working with cookies in the browser. It provides a set of functions to easily set, get, and remove cookies.

## Installation

You can install `thejscookie` via npm or yarn.

### Using npm

```bash
npm install thejscookie
```
 ### Using Yarn

 ```bash
yarn add thejscookie
```

## Usage
### To use thejscookie, you can import it and access its methods as follows:

```bash
import thejscookie from 'thejscookie';

// Set a cookie with a name, value, and expiry days
thejscookie.set('myCookie', 'cookieValue', 7);

// Get a cookie by name
const cookieValue = thejscookie.get('myCookie');

// Remove a cookie by name
thejscookie.remove('myCookie');
```

## Methods
- set(name, value, expiryDays)
   Sets a cookie with the given name, value, and optional expiryDays. If expiryDays is not provided, the cookie will be session-only.

- get(name)
Gets the value of a cookie with the specified name. Returns null if the cookie does not exist.

- remove(name)
Removes a cookie with the specified name.


For any inquiries or feedback, feel free to contact the author: [therohantomar](mailto:therohantomar@gmail.com)