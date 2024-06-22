import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 5000,
  limit: 1, 
  standardHeaders: "draft-7",
  legacyHeaders: false,
});