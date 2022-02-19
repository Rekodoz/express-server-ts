import express from "express";

const router: any = express.Router();

router.get("/what", (req: any, res: any) => {
  res.render("what");
});

export { router };
