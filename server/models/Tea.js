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
          about: {
               type: String,
               required: true,
          },
          image: {
               type: String,
               required: false,
          },
     },
     {
          timestamps: true,
     }
);

module.exports = model(`Tea`, schema);
