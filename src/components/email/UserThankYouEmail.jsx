import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Img,
  Section,
  Link,
  Preview,
} from "@react-email/components";

export default function UserThankYouEmail({ name, website }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out to Jassal Signs!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src="https://7tmb5fhjnq5dru7b.public.blob.vercel-storage.com/logo.png"
              width="150"
              alt="Jassal Signs Logo"
              style={styles.logo}
            />
          </Section>

          <Section style={styles.content}>
            <Heading style={styles.heading}>
              Thank You for Contacting Us
            </Heading>

            <Text style={styles.text}>Hi {name},</Text>

            <Text style={styles.text}>
              Thank you for reaching out to us . Our team has received your
              message and will get back to you shortly.
            </Text>

            <Text style={styles.text}>
              In the meantime, feel free to explore our products and services on
              our website.
            </Text>

            <Section style={styles.buttonContainer}>
              <Link
                href={"https://www.jassalsignsedm.com/"}
                style={styles.button}
              >
                Visit Our Website
              </Link>
            </Section>

            <Text style={styles.signature}>
              Regards,
              <br />
              <b style={{ color: "#ED1D26" }}>Team Jassal Signs</b>
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Jassal Signs. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f0f4f8",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "40px auto",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    maxWidth: "600px",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: "30px",
    textAlign: "center",
    borderBottom: "1px solid #f0f0f0",
  },
  logo: {
    margin: "0 auto",
    display: "block",
  },
  content: {
    padding: "40px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ED1D26",
    margin: "0 0 20px",
    textAlign: "center",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#2d3748",
    margin: "0 0 20px",
  },
  buttonContainer: {
    textAlign: "center",
    margin: "30px 0",
  },
  button: {
    backgroundColor: "#0283CB",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    padding: "12px 30px",
  },
  signature: {
    fontSize: "16px",
    color: "#2d3748",
    margin: "30px 0 0",
  },
  footer: {
    backgroundColor: "#0283CB",
    padding: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "12px",
    color: "#ffffff",
    margin: "0",
  },
};
