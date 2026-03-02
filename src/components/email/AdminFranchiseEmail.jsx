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

export default function AdminFranchiseEmail({
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
}) {
  return (
    <Html>
      <Head />
      <Preview>New Franchise Application from {name}</Preview>
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
            <Heading style={styles.heading}>New Franchise Application</Heading>
            <Text style={styles.subtext}>
              You have received a new franchise application.
            </Text>

            <Hr style={styles.hr} />

            <Section style={styles.infoSection}>
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
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Phone:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{phone}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Location:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>
                    {city}, {province}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr style={styles.hr} />

            <Section style={styles.detailsSection}>
              <Heading as="h3" style={styles.subHeading}>
                Business Details
              </Heading>

              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Experience:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{experience}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Current Owner:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{business}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Budget:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{budget}</Text>
                </Column>
              </Row>
              <Row style={styles.infoRow}>
                <Column style={styles.infoLabelCol}>
                  <Text style={styles.label}>Funding:</Text>
                </Column>
                <Column>
                  <Text style={styles.value}>{funding}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={styles.hr} />

            <Section style={styles.messageBox}>
              <Text style={styles.label}>Background:</Text>
              <Text style={styles.messageText}>{background}</Text>
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
  subHeading: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#2d3748",
    margin: "0 0 15px",
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
  detailsSection: {
    padding: "10px 0",
  },
  infoRow: {
    marginBottom: "8px",
  },
  infoLabelCol: {
    width: "120px",
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
