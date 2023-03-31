import styled from 'styled-components'

export const CompleteOrderContainer = styled.section`
  header {
    display: flex;
    color: ${(props) => props.theme['yellow-dark']};
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .mapIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
    line-height: 130%;
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  h4 {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-weight: 400;
  }
`

// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////

export const AdressContainer = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  width: 40rem;
  border-radius: 6px;
  padding: 2.5rem;
`
// ///////////////////////////////////////////////

export const AdressFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  input {
    height: 2.625rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    margin-bottom: 1rem;
  }

  input::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  input[type='text'],
  input[type='number'] {
    padding: 0.75rem;
  }

  .cep,
  .numero,
  .bairro {
    width: 12.5rem;
  }

  .uf {
    width: 3.75rem;
  }

  .numero,
  .bairro,
  .cidade {
    margin-right: 0.75rem;
  }

  .complemento,
  .cidade {
    flex: 1;
  }
`

export const ComplementContainer = styled.div`
  position: relative;
  flex: 1;

  ::after {
    position: absolute;
    content: 'Opcional';
    top: 0.65rem;
    left: 18rem;
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 40rem;
  border-radius: 6px;
  padding: 2.5rem;

  .purpleIcons {
    color: ${(props) => props.theme['purple-']};
  }
`

// ///////////////////////////////////////////////

export const PaymentMethodsContent = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;

    height: 51px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    span {
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
