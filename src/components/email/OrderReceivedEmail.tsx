import { ShippingAddress } from "@prisma/client";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

type OrderReceivedEmailProps = {
  shippingAddress: ShippingAddress;
  orderId: string;
  orderDate: string;
};

export default function orderReceivedEmail({
  shippingAddress,
  orderId,
  orderDate,
}: OrderReceivedEmailProps) {
  //TODO: This base url must receive the site url addres, as it has not been deployed yet, I let it blank.

  const baseUrl =
    process.env.NODE_ENV === "development" ? "http:localhost/3000" : "";

  return (
    <Html>
      <Head />
      <Preview>Resumo do seu pedido e data estimada de entrega</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={message}>
            <Img
              src={`${baseUrl}/snake-3.png`}
              width="65"
              height="73"
              style={{ margin: "auto" }}
            />
            <Heading>Obrigado pelo seu pedido!</Heading>
            <Text style={global.text}>
              Estamos preparando tudo para entrega e notificaremos você assim
              que seu pacote for enviado. A entrega geralmente leva 2 dias.
            </Text>
            <Text style={{ ...global.text, marginTop: 24 }}>
              Caso tenha alguma dúvida sobre seu pedido, sinta-se à vontade para
              entrar em contato conosco informando o número do seu pedido.
              Estamos aqui para ajudar.
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>
              Enviando para: {shippingAddress.name}
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {shippingAddress.street}, {shippingAddress.city},{" "}
              {shippingAddress.state} {shippingAddress.postalCode}
            </Text>
          </Section>

          <Hr style={global.hr} />

          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", marginBottom: 40 }}>
              <Column style={{ width: 170 }}>
                <Text style={global.paragraphWithBold}>Número do pedido</Text>
                <Text style={track.number}>{orderId}</Text>
              </Column>

              <Column>
                <Text style={global.paragraphWithBold}>Data do pedido</Text>
                <Text style={track.number}>{orderDate}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={global.hr} />

          <Section style={paddingY}>
            <Row>
              <Text style={{ ...footer, paddingTop: 30, paddingBottom: 30 }}>
                Entre em contato conosco se tiver alguma dúvida (Se você
                responder a este e-mail, não poderemos vê-lo.)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                &copy; CaseCraft, Inc. Todos os direitos reservados.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const addressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
