import { IS_DEV } from "@project/shared";

export const apiBase = IS_DEV
  ? "http://localhost:8000"
  : "https://app.example.com";
