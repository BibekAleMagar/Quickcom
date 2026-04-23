import { loginSchema } from "@/src/schema/loginSchema";
import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;