const UserModel = require("../model/user.model")

exports.fetchDetail = async (req, res) => {
    try {
        let userDetail = await UserModel.findById(req.body.userId);
        if (userDetail) {
            res.status(200).json({ userDetail })
        } else {
            res.status(404).json({ msg: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong while fetching user!' });
        console.log(error)
    }
}
exports.updateDetails = async (req, res) => {
    try {
        let { name, email, image, bio } = req.body;
        await UserModel.findByIdAndUpdate(req.body.userId, { name, email, image, bio })
        res.status(204).json({ msg: 'User profile updated' })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong while updating user!' });
        console.log(error)
    }
}