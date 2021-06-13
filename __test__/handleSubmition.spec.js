import { describe } from "yargs";
import { handleSubmit } from "../src/client/js/handleSubmition";

describe("test form submitions", () => {
  test("test handleSubmitions", () => {
    expect(handleSubmit).toBeDefined();
  });
});
