const User = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createUser };
