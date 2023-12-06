import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  & h1 {
    font-size: 24px;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  background-color: #f1f1f1;
  flex-wrap: wrap;
  height: 100%;
  padding-top: 50px;
  padding-inline: 100px;
  justify-content: center;
  gap: 50px;
  & img {
    width: 250px;
  }
`;

const Country = styled.div`
  display: flex;
  flex-direction: column;

  & .country-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-inline: 20px;
    & .country-name {
      font-size: 20px;
      margin-block: 8px;
      text-align: start;
    }
    & p {
      margin: 0;
    }
  }
`;

function App() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountriesList(response.data);
    });
  }, []);
  return (
    <Container>
      <NavBar>
        <h1>Where in world?</h1>
      </NavBar>
      <Content>
        {countriesList.map((country) => (
          <Country key={country.name.common}>
            <img src={country.flags.png} />
            <div>
              <strong className="country-name">{country.name.common}</strong>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </Country>
        ))}
      </Content>
    </Container>
  );
}

export default App;
