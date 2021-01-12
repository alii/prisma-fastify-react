import fastify from "fastify";
import { IS_DEV } from "@project/shared";
const app = fastify();

const port = process.env.PORT || "8000";

app.get("/", async () => {
  return { time: Date.now() };
});

app.listen(port).then(() => {
  console.log("App listening on", port);
  console.log("Development mode:", IS_DEV);
});
