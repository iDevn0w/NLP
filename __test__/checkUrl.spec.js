// import { ExpectationFailed } from "http-errors";
// import { test } from "picomatch";
// import { describe } from "yargs";
import { checkUrl } from "../src/client/js/checkUrl";

// test url is return truly or falsy
// describe("check the urls", () => {
test("check url return value", () => {
  expect(checkUrl).toBeDefined();
});
// });
