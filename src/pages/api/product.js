import { Resend } from "resend";
import { render } from "@react-email/render";
import UserThankYouEmail from "../../components/email/UserThankYouEmail";
import AdminContactProduct from "../../components/email/AdminContactProduct";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    website,
    location,
    signage,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !website ||
    !location ||
    !signage
  ) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    /* ---------- Admin Email ---------- */
    const adminHtml = await render(
      <AdminContactProduct
        name={`${firstName} ${lastName}`}
        email={email}
        phone={phone}
        message={message || ""}
        website={website}
        location={location}
        signage={signage}
      />,
    );

    await resend.emails.send({
      from: "Jassal Signs <noreply@jassalsignsedm.com>",
      to: [process.env.ADMIN_EMAIL],
      replyTo: email,
      subject: `New Product Inquiry – ${website}`,
      html: adminHtml,
    });

    /* ---------- User Thank You Email ---------- */
    const userHtml = await render(
      <UserThankYouEmail name={`${firstName} ${lastName}`} website={website} />,
    );

    await resend.emails.send({
      from: "Jassal Signs <noreply@jassalsignsedm.com>",
      to: [email],
      subject: "Thanks for contacting us",
      html: userHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}
