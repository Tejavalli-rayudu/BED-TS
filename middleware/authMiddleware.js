function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Missing"
        });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token:", token);

    if (token !== "student-secret-token") {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }

    next();
}

module.exports = auth;