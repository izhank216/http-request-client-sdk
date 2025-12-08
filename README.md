# @izhank216/http-request-client

## Installation

```bash
npm install @izhank216/http-request-client
```

## Usage
```javascript
import { HttpRequestClient } from '@izhank216/http-request-client';

async function main() {
  const data = await HttpRequestClient.request({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  });
  console.log(data);
}

main();
```

