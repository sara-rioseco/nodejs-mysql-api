import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60000,
  limit: 10, 
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: 'You have exceeded the maximum amount of 10 requests per minute.'
});