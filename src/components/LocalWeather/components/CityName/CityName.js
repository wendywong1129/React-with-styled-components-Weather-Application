import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  color: white;
  font-weight: 500;
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    margin-top: 0.5rem;
    height: 2px;
    width: 50%;
    background-color: white;
    border-radius: 2px;
    transform: translateX(50%);
  }
`;



const CityName = ({ name }) => {
  return (
    <Container>
      {name}
    </Container>
  );
};

export default CityName;
