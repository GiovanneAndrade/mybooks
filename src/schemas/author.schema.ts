import  joi from "joi"

const postAuthorSchema = joi.object({
  name: joi.string().required().trim(),
  idade: joi.number().required()
});

export default postAuthorSchema;