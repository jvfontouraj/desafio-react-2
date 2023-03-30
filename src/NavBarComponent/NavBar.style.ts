import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .actions {
    display: flex;
    gap: 0.75rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 90rem;
    padding: 2rem 10rem;
    background: ${(props) => props.theme['background-']};
    img {
      height: 2.5rem;
      width: auto;
    }
    .location {
      display: flex;
      height: fit-content;
      width: fit-content;

      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
      background: ${(props) => props.theme['purple-light']};

      .mapPin {
        color: ${(props) => props.theme['purple-']};
      }

      span {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    .shoppingCart {
      display: flex;
      height: fit-content;
      width: fit-content;
      padding: 0.5rem;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 6px;
    }
  }
`
