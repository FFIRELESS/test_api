module.exports = (err, req, res, next) => {
    console.log();
    console.log("ERROR");
    console.log(err.message);
    console.log();
    res.status(500).send("Something went wrong");
    next();
};