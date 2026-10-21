import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as api from "../dist/index.js";
test("path escaping and repeated query", () =>
  assert.equal(
    api.buildUrl("https://x.test/api", ["a/b"], { q: ["a b", "c"] }),
    "https://x.test/api/a%2Fb?q=a+b&q=c",
  ));
test("remove parameter preserve hash", () =>
  assert.equal(
    api.buildUrl("https://x.test/?a=1#x", [], { a: null }),
    "https://x.test/#x",
  ));
test("reject relative base", () =>
  assert.throws(() => api.buildUrl("/x"), TypeError));
