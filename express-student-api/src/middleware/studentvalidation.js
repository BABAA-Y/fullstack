const validateStudent = (req, res, next) => {
    const { name, course } = req.body;

    if (
        typeof name !== "string" ||
        typeof course !== "string" ||
        name.trim() === "" ||
        course.trim() === ""
    ) {
        return res.status(400).json({
            message: "Name and course must be non-empty strings"
        });
    }

    next();
};

module.exports = validateStudent;