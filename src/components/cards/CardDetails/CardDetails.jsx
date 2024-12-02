import styled from "styled-components";
import market from "../../../assets/images/market.png";
import fair from "../../../assets/images/fair.png";

const ContentCardDetails = styled.main`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1;
`;

const CardDetailsSection = styled.section`
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: auto;
  position: relative;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  z-index: 2;
  @media only screen and (max-width: 801px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
  }
`;

const Header = styled.header`
  width: 65%;
  margin: 10px;
  @media only screen and (min-width: 801px) {
    padding: 20px;
  }
  @media only screen and (max-width: 801px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: black;
  @media only screen and (min-width: 801px) {
    padding-block: 10px;
  }
`;

const Aside = styled.aside`
  width: 35%;
  text-align: start;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  @media only screen and (min-width: 801px) {
    padding: 20px;
  }
  @media only screen and (max-width: 801px) {
    width: 100%;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  margin: 10px;
  max-width: 90%;
  height: 250px;
  object-fit: cover;
  @media only screen and (max-width: 801px) {
    height: 150px;
  }
`;

const CardDetails = ({ card, setOpenModal }) => {
  return (
    <ContentCardDetails onClick={() => setOpenModal(false)}>
      <BlurBackground />
      <CardDetailsSection onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{card.title}</Title>
          <Image
            src={card.type === "Mercado" ? market : fair}
            alt="foto_barri"
          />
        </Header>
        <Aside>
          <div style={{ lineHeight: "1rem" }}>
            <strong>Tipo:</strong>
            <p>{card.type}</p>
          </div>

          <div style={{ lineHeight: "1rem" }}>
            <strong>Dirección:</strong>
            <p>
              {card.direction}, CP:{card.zip}
            </p>
          </div>
          <div style={{ lineHeight: "1rem" }}>
            <strong>Año de apertura:</strong>
            <p>{card.year}</p>
          </div>
          <div style={{ lineHeight: "1rem" }}>
            <strong>Link Web:</strong>
            <p>{card.link}</p>
          </div>
        </Aside>
      </CardDetailsSection>
    </ContentCardDetails>
  );
};

export default CardDetails;
