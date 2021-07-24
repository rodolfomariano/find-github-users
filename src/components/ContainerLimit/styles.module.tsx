import styled from 'styled-components'

export const ContainerLimitStyles = styled.main`
  width: 100%;
  
  .content {
    height: calc(100vh - 150px);
    padding: 32px 8px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    overflow-y: auto;

  }
`