exports.getUsers = (req, res) => {
    res.status(200).send("Get All Users"); 
};

exports.getUser = (req, res) => {
    res.status(200).send("Get Single User"); 
};

exports.createUser = (req, res) => {
    res.status(200).send("Create New User"); 
};

exports.updateUser = (req, res) => {
    res.status(200).send("Update User"); 
};

exports.deleteUser = (req, res) => {
    res.status(200).send("Delete User"); 
};
