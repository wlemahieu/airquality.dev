import functions from "@google-cloud/functions-framework";
functions.http("test", function (req, res) {
    res.send("Hello ".concat(req.query.name || req.body.name || "World", "!"));
});
