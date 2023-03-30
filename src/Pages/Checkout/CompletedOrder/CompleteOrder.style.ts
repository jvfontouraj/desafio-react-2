import styled from 'styled-components'

export const CompleteOrderContainer = styled.section`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
