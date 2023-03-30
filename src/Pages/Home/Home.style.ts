import styled from 'styled-components'

export const HomeContainer = styled.div`
  .CoffeeList {
    padding: 2rem 10rem 10rem 10rem;
    background: ${(props) => props.theme['background-']};

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      margin-bottom: 3.375rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .coffees {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`
