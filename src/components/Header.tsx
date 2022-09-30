import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>Battleship</HeaderWrapper>
}

const HeaderWrapper = styled.header`
padding: ${({ theme }) => theme.padding.lg};
font-family: sans-serif;
font-size: 12rem;
font-weight: 900;
letter-spacing: 1rem;
line-height: 1;
text-align: center;

@media (max-widht: 768px) {
  font-size: 7rem;
}
`

export default Header