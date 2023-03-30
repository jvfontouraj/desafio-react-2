import styled from 'styled-components'
import backgroundImage from '../../../assets/Background.png'

export const HeroContainer = styled.section`
  display: flex;
  background-color: ${(props) => props.theme['background-']};
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  width: 90rem;
  padding: 0 10rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    margin-left: 0.75rem;
  }

  .heroContent {
    display: flex;
    flex-direction: column;
    padding-top: 5.875rem;
    width: 36.75rem;
    margin-right: 3.5rem;
  }

  .itemsDiv {
    display: flex;
    gap: 2.5rem;
  }

  .itemContent {
    display: flex;
    align-items: center;
  }

  .itemsColumnOne,
  .itemsColumnTwo {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .shoppingIcon,
  .timerIcon,
  .packageIcon,
  .coffeeIcon {
    padding: 0.5rem;
    box-sizing: content-box;
    color: ${(props) => props.theme['white-']};
    border-radius: 99999px;
  }

  .shoppingIcon {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  .timerIcon {
    background-color: ${(props) => props.theme['yellow-']};
  }

  .packageIcon {
    background-color: ${(props) => props.theme['base-text']};
  }

  .coffeeIcon {
    background-color: ${(props) => props.theme['purple-']};
  }

  img {
    height: 22.5rem;
    width: auto;
    margin-top: 5.75rem;
  }
`
