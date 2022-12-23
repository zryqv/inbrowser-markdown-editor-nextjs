import { router } from "../trpc";
import { authRouter } from "./auth";
import { docsRouter } from "./docs";

export const appRouter = router({
  auth: authRouter,
  docs: docsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
