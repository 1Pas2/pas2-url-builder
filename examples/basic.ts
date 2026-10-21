import { buildUrl } from "../dist/index.js";
console.log(
  buildUrl("https://example.com/api", ["users", "Jane Doe"], { page: 2 }),
);
