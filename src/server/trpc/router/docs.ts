import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const docsRouter = router({
  getDocs: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.document.findMany({
      where: { belongsToId: ctx.session.user.id },
      select: { updatedAt: true, title: true, content: true },
    });
  }),
  upsertDoc: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        newTitle: z.string().optional(),
        content: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.document.upsert({
        where: {
          title_belongsToId: {
            belongsToId: ctx.session.user.id,
            title: input.title,
          },
        },
        update: { title: input.newTitle, content: input.content },
        create: {
          title: input.newTitle || input.title,
          content: input.content,
          belongsToId: ctx.session.user.id,
        },
      });
    }),
  deleteDoc: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.document.delete({
        where: {
          title_belongsToId: {
            title: input.title,
            belongsToId: ctx.session.user.id,
          },
        },
      });
    }),
});
