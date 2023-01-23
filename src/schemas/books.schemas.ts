import  joi from "joi"

const postBooksSchema = joi.object({
  name: joi.string().required().trim(),
  description: joi.string().required(),
  classification: joi.number().required(),
  authorId: joi.number().required()
});

export default postBooksSchema;
