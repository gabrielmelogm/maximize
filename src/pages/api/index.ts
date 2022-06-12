import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../services/prisma";

async function verifyIfExist(email: string) {
  const isExist = await prisma.emails.findFirst({
    where: { email },
  });

  let emailId;
  if (!isExist) {
    emailId = await prisma.emails.create({
      data: { email },
    });
    return emailId;
  } else {
    return (emailId = isExist);
  }
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getContacts();
    case "POST":
      return createNewContact();

    default:
      return res.status(400).send("No method provider");
  }

  async function getContacts() {
    const response = await prisma.contacts.findMany();
    await prisma.$disconnect();
    return res.status(200).send(response);
  }

  async function createNewContact() {
    const { fields } = req.body;
    const { contact_type, name, company, email, phone, message, recaptcha } =
      fields;

    const emails = await verifyIfExist(email);

    if (emails.id_email) {
      await prisma.contacts.create({
        data: {
          contact_type,
          name,
          company,
          emailId: emails.id_email,
          phone: phone,
          message,
          recaptcha,
        },
      });
    } else {
      return res.status(500).send("Erro inesperado");
    }

    await prisma.$disconnect();
    return res.status(201).json({ emailId: emails?.id_email });
  }
}

export default handler;
