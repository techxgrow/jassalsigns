import { Resend } from "resend";
import { render } from "@react-email/render";
import AdminContactEmail from "../../components/email/AdminContactEmail";
import UserThankYouEmail from "../../components/email/UserThankYouEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { firstName, lastName, email, phone, message, website } = req.body;

  if (!firstName || !lastName || !email || !phone || !message || !website) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    /* ---------- Render Emails ---------- */
    const adminHtml = await render(
      <AdminContactEmail
        name={`${firstName} ${lastName}`}
        email={email}
        phone={phone}
        message={message}
        website={website}
      />,
    );

    const userHtml = await render(
      <UserThankYouEmail name={`${firstName} ${lastName}`} website={website} />,
    );

    /* ---------- Send Emails Concurrently ---------- */
    await Promise.all([
      resend.emails.send({
        from: "Jassal Signs <noreply@jassalsignsedm.com>",
        to: [process.env.ADMIN_EMAIL],
        replyTo: email,
        subject: `New Contact – ${website}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from: "Jassal Signs <noreply@jassalsignsedm.com>",
        to: [email],
        subject: "Thanks for contacting us",
        html: userHtml,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending emails:", err);
    return res.status(500).json({ success: false });
  }
}
