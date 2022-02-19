import express from "express";
const router: any = express.Router();

router.get("/another-page", (req: any, res: any) => {
  res.render("another-page");
});

export { router };
