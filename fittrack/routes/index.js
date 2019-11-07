const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
router.post("/api/recipe", (req, res) =>{
  db.Recipes.create(req.body).then(
    (response) => {
      res.json({succssful: response})
      console.log(response)
    }
  ).catch(
    (err) => {
      res.json({error: err})
    }
  )
})
module.exports = router;