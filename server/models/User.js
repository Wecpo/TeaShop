const { Schema, model } = require(`mongoose`);

const schema = new Schema(
     {
          name: {
               type: String,
               required: true,
          },
          email: {
               type: String,
               required: true,
          },
          password: {
               type: String,
               required: true,
          },
          sex: {
               type: String,
               enum: [`male`, `female`],
          },
          image: {
               type: String,
          },
          cart: {
               type: Array,
          },
          isAdmin: {
               type: Boolean,
          },
     },
     {
          timestamps: true,
     }
);

module.exports = model(`User`, schema);
