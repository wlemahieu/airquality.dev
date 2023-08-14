import functions from "@google-cloud/functions-framework";

functions.http("test", (req, res) => {
  res.send(`Hello ${req.query.name || req.body.name || "World"}!`);
});
