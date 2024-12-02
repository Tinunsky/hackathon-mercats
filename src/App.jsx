import { useEffect, useState } from "react";
import Card from "../src/components/cards/Card/Card";
import CardDetails from "../src/components/cards/CardDetails/CardDetails";
import styled from "styled-components";
import list from "./mocks/ferias.json";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import { MapMarkets } from "../src/components/map/MapMarkets";
import useApi from "./services/useApi";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cardSelected, setCardSelected] = useState({});
  const [isMap, setIsMap] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(list);

  useEffect(() => {}, [isMap]);

  useEffect(() => {
    setFilteredCards(filteredList(query));
  }, [query]);

  const filteredList = (query) => {
    return list.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const { mercatsData, error } = useApi(
    "https://zesty-nurturing-production.up.railway.app/api/street_market"
  );
  console.log(mercatsData);

  const ContentCards = styled.main`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 32px;
    padding: 20px;
    // eslint-disable-next-line react/prop-types
    filter: ${(props) => (props.openModal ? "blur(5px)" : "none")};
  `;

  const DivCards = styled.div`
    width: 45%;
    max-width: 350px;
  `;

  return (
    <>
      <Navbar />
      <main>
        {isMap ? (
          <MapMarkets query={query} />
        ) : (
          <ContentCards openModal={openModal}>
            {filteredCards.map((card) => (
              <DivCards
                key={card.id}
                onClick={() => {
                  setOpenModal(true);
                  setCardSelected(card);
                }}
              >
                <Card card={card} />
              </DivCards>
            ))}
          </ContentCards>
        )}

        {openModal && (
          <CardDetails card={cardSelected} setOpenModal={setOpenModal} />
        )}
      </main>
      <SearchBar
        isMap={isMap}
        setIsMap={setIsMap}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}

export default App;
