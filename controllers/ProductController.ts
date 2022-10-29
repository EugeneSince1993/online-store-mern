import ProductModel from '../models/Product';
const mongoose = require('mongoose');
const newId = mongoose.Types.ObjectId();

const newLine = /\n{1}/;
const newLineRegex = new RegExp(newLine);

export const getAll = async (req, res) => {
  try {
    const sortQuery = req.query.order;
    console.log(sortQuery);

    let sortObject = {};
    if (req.query.sortBy === "rating") {
      sortObject["rating"] = sortQuery;
    } else if (req.query.sortBy === "price") {
      sortObject["price"] = sortQuery;
    } else if (req.query.sortBy === "name") {
      sortObject["name"] = sortQuery;
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

export const create = async (req, res) => {
  try {
    const doc = new ProductModel({
      user: req.userId,
      _id: newId,
      imageUrl: req.body.imageUrl,
      images: req.body.images.split(newLineRegex),
      brand: req.body.brand,
      name: req.body.name,
      price: req.body.price,
      memory: req.body.memory,
      ram: req.body.ram,
      cpuCores: req.body.cpuCores,
      screenSize: req.body.screenSize,
      batteryCapacity: req.body.batteryCapacity,
      color: req.body.color,
      productCode: req.body.productCode,
      description: req.body.description,
      shortDesc: req.body.shortDesc,
    });

    const product = await doc.save();

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать товар',
    });
  }
};

export const update = async (req, res) => {
  try {
    const productId = req.params.id;

    await ProductModel.updateOne(
      {
        _id: productId
      },
      {
        user: req.userId,
        imageUrl: req.body.imageUrl,
        images: req.body.images.split(newLineRegex),
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        memory: req.body.memory,
        ram: req.body.ram,
        cpuCores: req.body.cpuCores,
        screenSize: req.body.sreenSize,
        batteryCapacity: req.body.batteryCapacity,
        color: req.body.color,
        productCode: req.body.productCode,
        description: req.body.description,
        shortDesc: req.body.shortDesc,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить товар',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const productId = req.params.id;

    ProductModel.findOneAndDelete(
      {
        _id: productId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Не удалось удалить товар',
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Товар не найден',
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товары',
    })
  }
};

export const getRangeExtremes = async (req, res) => {
  try {
    const minPriceRaw = await ProductModel
      .find({})
      .sort({price: 'asc'})
      .limit(1)
      .select('price -_id')
      .exec();
    const minPrice = minPriceRaw[0]["price"];

    const maxPriceRaw = await ProductModel
      .find({})
      .sort({price: 'desc'})
      .limit(1)
      .select('price -_id')
      .exec();
    const maxPrice = maxPriceRaw[0]["price"];
    
    const priceExtremes = {
      minPrice,
      maxPrice
    };

    const minScreenSizeRaw = await ProductModel
      .find({})
      .sort({screenSize: 'asc'})
      .limit(1)
      .select('screenSize -_id')
      .exec();
    const minScreenSize = minScreenSizeRaw[0]["screenSize"];

    const maxScreenSizeRaw = await ProductModel
      .find({})
      .sort({screenSize: 'desc'})
      .limit(1)
      .select('screenSize -_id')
      .exec();
    const maxScreenSize = maxScreenSizeRaw[0]["screenSize"];
    
    const screenSizeExtremes = {
      minScreenSize,
      maxScreenSize
    };

    const minBatteryCapacityRaw = await ProductModel
      .find({})
      .sort({batteryCapacity: 'asc'})
      .limit(1)
      .select('batteryCapacity -_id')
      .exec();
    const minBatteryCapacity = minBatteryCapacityRaw[0]["batteryCapacity"];

    const maxBatteryCapacityRaw = await ProductModel
      .find({})
      .sort({batteryCapacity: 'desc'})
      .limit(1)
      .select('batteryCapacity -_id')
      .exec();
    const maxBatteryCapacity = maxBatteryCapacityRaw[0]["batteryCapacity"];
    
    const batteryCapacityExtremes = {
      minBatteryCapacity,
      maxBatteryCapacity
    };

    const rangeExtremes = {
      priceExtremes,
      screenSizeExtremes,
      batteryCapacityExtremes
    }
    res.json(rangeExtremes);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товары',
    });
  }
};
