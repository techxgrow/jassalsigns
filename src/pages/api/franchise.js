import { Resend } from "resend";
import { render } from "@react-email/render";
import AdminFranchiseEmail from "../../components/email/AdminFranchiseEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    name,
    email,
    phone,
    city,
    province,
    experience,
    business,
    background,
    budget,
    funding,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !city ||
    !province ||
    !experience ||
    !business ||
    !background ||
    !budget ||
    !funding
  ) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    /* ---------- Admin Email ---------- */
    const adminHtml = await render(
      <AdminFranchiseEmail
        name={name}
        email={email}
        phone={phone}
        city={city}
        province={province}
        experience={experience}
        business={business}
        background={background}
        budget={budget}
        funding={funding}
      />,
    );

    await resend.emails.send({
      from: "Jassal Signs <noreply@jassalsignsedm.com>",
      to: [process.env.ADMIN_EMAIL],
      replyTo: email,
      subject: `New Franchise Application - ${name}`,
      html: adminHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}
