import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getUsers", {
      output: z.array(
        z.object({
          id: z.number(),
          name: z.string()
      })
    ),
    resolve(){
      return [
        {
          id: 1,
          name: "Aline"
        },
        {
          id: 2,
          name: "Milene"
        }
      ]
    }
  });