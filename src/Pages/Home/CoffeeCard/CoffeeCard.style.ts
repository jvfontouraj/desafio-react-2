import styled from 'styled-components'

export const CoffeeCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    margin-top: -20px;
    width: 7.5rem;
    height: auto;
  }

  .tag {
    display: flex;
    padding: 4px 8px;
    margin-top: 0.75rem;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
  }

  .coffeeName {
    margin-top: 1rem;
    padding: 0 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    text-align: center;
    margin-top: 0.5rem;
    padding: 0 1.25rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  .buy {
    display: flex;
    margin-top: 2rem;
    align-items: center;
  }

  .priceContainer {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-right: 1.43rem;
  }

  .pricePrefix {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  .price {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  .counterContainer {
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin-right: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};

    button {
      border: none;
      border-radius: 6px;
      background-color: ${(props) => props.theme['base-button']};
    }
  }

  .counterNumberContainer {
    width: 1.25em;
    height: auto;
    text-align: center;
    cursor: default;
  }

  .counterNumber {
    font-size: 1rem;
  }

  .counterIcon {
    color: ${(props) => props.theme['purple-']};
    box-sizing: content-box;
    padding: 12px 8px;
    transition: all 0.3s;
    cursor: pointer;
  }

  .counterIcon:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ShoppingCartButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  .shoppingIcon {
    box-sizing: content-box;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 0.5rem;
    transition: all 0.3s;
  }

  .shoppingIcon:hover {
    background-color: ${(props) => props.theme['purple-']};
  }
`
