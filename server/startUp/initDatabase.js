const Tea = require("../models/Tea");
const teaMock = require("../mock/tea.json");

module.exports = async () => {
     const teas = await Tea.find();
     if (teas.length !== teaMock.length) {
          await createInitialEntity(Tea, teaMock);
     }
};

async function createInitialEntity(Model, data) {
     await Model.collection.drop();
     return Promise.all(
          data.map(async (item) => {
               try {
                    delete item.id;
                    const newItem = new Model(item);
                    await newItem.save();
                    return newItem;
               } catch (e) {
                    return e;
               }
          })
     );
}
