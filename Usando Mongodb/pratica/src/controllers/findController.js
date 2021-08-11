const HomeModel = require('../models/HomeModel');

exports.find = async (req, res) => {
    const data = await HomeModel.find();
    res.send(data);
};