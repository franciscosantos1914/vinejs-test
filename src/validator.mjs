import vine from "@vinejs/vine";

export async function credentials(data) {
  const schema = vine.object({
    username: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32).confirmed(),
  });

  const output = await vine.validate({ schema, data });
  return output;
}
