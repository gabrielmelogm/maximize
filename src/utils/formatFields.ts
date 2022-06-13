export const formatFields = (fields: any) => {
  if (fields.recaptcha === "on") {
    fields.recaptcha = true;
  } else {
    fields.recaptcha = false;
  }

  fields.phone = fields.phone
    .replace(" ", "")
    .replace("(", "")
    .replace(")", "")
    .replace("-", "");
  return fields;
};
