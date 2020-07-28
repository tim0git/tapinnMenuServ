const Menu = require('../model/menuSchema');

exports.getMenu = async (req, res, next) => {
  const { venue_id } = req.query;

  try {
    const menu = await Menu.findById(venue_id).sort('desc');

    res.status(200).send(menu);
  } catch (error) {
    next(error);
  }
};

exports.postMenu = async (req, res, next) => {
  let { venue_id, venue_name, venue_tables, menu } = req.body;

  try {
    menu = new Menu({
      _id: venue_id,
      venue_name,
      venue_tables,
      menu
    });

    const result = await menu.save();

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
