import styled from 'styled-components'

export const CheckoutCoffeeSelectedContainer = styled.section`
  display: flex;

  img {
    width: 4rem;
    height: auto;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopRowContainer = styled.div`
  display: flex;
`

export const BottomRowContainer = styled.div`
  display: flex;
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};

  button {
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
  }

  .counterNumberContainer {
    width: 1.25em;
    height: auto;
    text-align: center;
  }

  .counterNumber {
    font-size: 1rem;
  }

  .counterIcon {
    color: ${(props) => props.theme['purple-']};
    box-sizing: content-box;
    padding: 12px 8px;
  }
`
