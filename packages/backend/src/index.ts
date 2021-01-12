import fastify from "fastify";
import "dotenv/config";

import { IS_DEV } from "@project/shared";
import { prisma } from "./db";

const app = fastify();

const port = process.env.PORT || "8000";

app.get("/", async () => {
  return prisma.user.count();
});

prisma
  .$connect()
  .then(() => app.listen(port))
  .then(() => {
    console.log("App listening on", port);
    console.log("Development mode:", IS_DEV);
  });
