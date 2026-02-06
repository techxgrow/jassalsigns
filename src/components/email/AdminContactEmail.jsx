import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Hr,
  Img,
  Section,
  Row,
  Column,
  Preview,
} from "@react-email/components";

export default function AdminContactEmail({
  website,
  name,
  email,
  message,
  phone,
}) {
  return (
    <Html>
      <Head />
      <Preview>
        New Inquiry from {name} via {website}
      </Preview>
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
              New Contact Form Submission
            </Heading>
            <Text style={styles.subtext}>
              You have received a new message from your website contact form.
            </Text>

            <Hr style={styles.hr} />

            <Section style={styles.infoSection}>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Website:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{website}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Name:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{name}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Email:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{email}</Text>
                </Column>
              </Row>
              {phone && (
                <Row style={styles.infoRow}>
                  <Column style={styles.infoLabelCol}>
                    <Text style={styles.label}>Phone:</Text>
                  </Column>
                  <Column>
                    <Text style={styles.value}>{phone}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Hr style={styles.hr} />

            <Section style={styles.messageBox}>
              <Text style={styles.label}>Message:</Text>
              <Text style={styles.messageText}>{message}</Text>
            </Section>
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
    color: "#ED1D26", // Brand Red
    margin: "0 0 10px",
    textAlign: "center",
  },
  subtext: {
    fontSize: "16px",
    color: "#4a5568",
    textAlign: "center",
    margin: "0 0 30px",
  },
  hr: {
    borderColor: "#e2e8f0",
    margin: "20px 0",
  },
  infoSection: {
    padding: "10px 0",
  },
  infoRow: {
    marginBottom: "8px",
  },
  infoLabelCol: {
    width: "100px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#718096",
    margin: "0",
  },
  value: {
    fontSize: "15px",
    color: "#2d3748",
    fontWeight: "500",
    margin: "0",
  },
  messageBox: {
    backgroundColor: "#f7fafc",
    padding: "20px",
    borderRadius: "6px",
    border: "1px solid #edf2f7",
  },
  messageText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#2d3748",
    whiteSpace: "pre-wrap",
    marginTop: "8px",
  },
  footer: {
    backgroundColor: "#0283CB", // Brand Blue
    padding: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "12px",
    color: "#ffffff",
    margin: "0",
  },
};
