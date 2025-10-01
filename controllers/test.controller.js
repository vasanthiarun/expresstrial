const allAccess = (req, res) => {
    res.status(200).send("All can access this  Content.");
};
 
const userBoard = (req, res) => {
    res.status(200).send("Only logged in users can access this Content.");
};
 
const moderatorBoard = (req, res) => {
    res.status(200).send("Only Moderatos/ admins can access Content.");
};
 
const adminBoard = (req, res) => {
    res.status(200).send("Only Admins can access.");
};
module.exports = {
  allAccess, userBoard, moderatorBoard, adminBoard
};


