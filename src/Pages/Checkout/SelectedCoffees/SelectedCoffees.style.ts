import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.section`
  margin-left: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
    line-height: 130%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  width: 28rem;
  border-radius: 6px 44px;
  padding: 2.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`
export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-text']};
  div {
    margin-bottom: 0.75rem;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  span {
    font-size: 1rem;
  }
`
export const TotalContainer = styled.div`
  margin-bottom: 1.5rem;
  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  background: ${(props) => props.theme['yellow-']};
  color: ${(props) => props.theme['white-']};
  border-radius: 6px;
  border: none;
`
