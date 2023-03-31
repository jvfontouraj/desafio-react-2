import styled from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90rem;
  background: ${(props) => props.theme['background-']};
  height: calc(100vh - 6.5rem);
  padding: 5rem 10rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
    margin-bottom: 2.5rem;
  }

  img {
    display: flex;
    align-self: center;
    width: 30.75rem;
    height: 18.31rem;
  }

  .alignCenterContainer {
    display: flex;
    gap: 6.375rem;
  }
`

export const DeliveryInfoContainer = styled.div`
  padding: 2.5rem;
  padding-bottom: 0;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 6px 36px;
  width: 32.875rem;
`

export const InfosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
  }

  .mapIcon,
  .timerIcon,
  .dollarIcon {
    box-sizing: content-box;
    padding: 0.5rem;
    color: white;
    border-radius: 99999px;
    margin-right: 0.75rem;
  }

  .mapIcon {
    background-color: ${(props) => props.theme['purple-']};
  }

  .timerIcon {
    background-color: ${(props) => props.theme['yellow-']};
  }

  .dollarIcon {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
