import styled from "styled-components";

export const EpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100vh;
  justify-content: center;
  :before {
    background: linear-gradient(
        to right,
        rgba(139, 69, 19, 0.5),
        rgba(139, 69, 19, 0.5)
      ),
      linear-gradient(to left, rgba(139, 69, 19, 0) 200px, #8b4513 430px);
  }
`;

export const EpisodeBox = styled.section`
  padding: 0.5rem;
  background-color: white;
`;

export const Header = styled.header`
  background: #8b4513;
  color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  padding: 0.5rem 3rem;
  position: relative;
  top: 0;
  :before {
    background: linear-gradient(
        to right,
        rgba(139, 69, 19, 0.5),
        rgba(139, 69, 19, 0.5)
      ),
      linear-gradient(to left, rgba(139, 69, 19, 0) 200px, #8b4513 430px);
  }
  img {
    height: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }
  div a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      margin-left: 2rem
  }`

  export const Button = styled.button`
    padding: 0 1rem;
    margin: 0 1rem;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: #41403e;
    font-size: 1.5rem;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    :hover {
      box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
    }
    border: solid 2px #41403e;
    font-family: "Patrick Hand SC", cursive;
    cursor: pointer;
  `
  
  export const NavButton = styled.div`
    padding: 0 1rem;
    margin: 0 1rem;
    display: inline-block;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    :hover {
      box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
    }
    border: solid 2.5px #fff;
    font-family: "Patrick Hand SC", cursive;
    cursor: pointer;
  `;
