import ProductModel from '../models/Product';

export const getAll = async (req, res) => {
  try {
    const sortQuery = req.query.sort;
    console.log(sortQuery);

    let sortObject = {};
    if (req.query.sortField === "rating") {
      sortObject["rating"] = sortQuery;
    } else if (req.query.sortField === "price") {
      sortObject["price"] = sortQuery;
    } else if (req.query.sortField === "title") {
      sortObject["title"] = sortQuery;
    }

    const products = await ProductModel
      .find({})
      .sort(sortObject)
      .exec();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товары',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const productId = req.params.id;

    ProductModel.findOneAndUpdate(
      {
        _id: productId,
      },
      {
        returnDocument: 'after',
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Не удалось вернуть товар',
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Товар не найден',
          });
        }

        res.json(doc);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товары',
    });
  }
};
