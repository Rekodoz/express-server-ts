import express from "express";
const router: any = express.Router();

router.get("/", (req: any, res: any) => {
  res.render("index");
});

export { router };
