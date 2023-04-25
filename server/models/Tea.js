const { Schema, model } = require(`mongoose`);

const schema = new Schema(
     {
          name: {
               type: String,
               required: true,
          },
          price: {
               type: Number,
               required: true,
          },
     },
     {
          timestamps: true,
     }
);

module.exports = model(`Tea`, schema);