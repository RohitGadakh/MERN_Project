const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDbs = require("./config/config");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");

dotenv.config();
connectDbs();

const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log("all items Added");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

importData();
