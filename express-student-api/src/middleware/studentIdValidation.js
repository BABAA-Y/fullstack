const validateIdStudent = (req, res, next)=>{
    const id = Number(req.params.id);

    if(Number.isNaN(id)){
        return res.status(400).json({
            message: "studnet ID must be a number"
        });
    }
    next();
}
module.exports = validateIdStudent;