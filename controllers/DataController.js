const Data = require("./../models/Data");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  async index(req, res) {
    const datas = await Data.find();

    return res.status(HttpStatus.OK).json(datas);
  },

  async store(req, res) {
    const { dates, name } = req.body;

    console.log({ dates, name });

    if (!dates || !name) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    try {
      await Data.create({ dates, name });
      return res.status(StatusCodes.CREATED).send();
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
  },
};
