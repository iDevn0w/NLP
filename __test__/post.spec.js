import { describe } from "yargs";
import { postUrlToServer } from "../src/client/js/post/post";

describe("test form submitions", () => {
  test("test handleSubmitions", () => {
    expect(postUrlToServer).toBeDefined();
  });
});
