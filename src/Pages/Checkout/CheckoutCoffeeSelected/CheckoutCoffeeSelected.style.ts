import styled from 'styled-components'

export const CheckoutCoffeeSelectedContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e6e5e5;
  width: 23rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    margin-right: 4.56rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const BottomRowContainer = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  padding: 0.56rem 0.5rem;

  width: 4.5rem;
  height: 2rem;

  button {
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
  }

  .counterNumberContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25em;
    height: auto;
  }

  .counterNumber {
    font-size: 1rem;
    cursor: default;
  }

  .counterIcon {
    color: ${(props) => props.theme['purple-']};
    box-sizing: content-box;
    transition: all 0.3s;
    cursor: pointer;
  }

  .counterIcon:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const TrashButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    .trashIcon {
      color: ${(props) => props.theme['purple-dark']};
    }
    .span {
      color: ${(props) => props.theme['base-subtitle']};
    }
    background-color: ${(props) => props.theme['base-hover']};
  }

  .trashIcon {
    color: ${(props) => props.theme['purple-']};
    box-sizing: content-box;
    margin-right: 0.25rem;
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`
