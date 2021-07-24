import styled from 'styled-components'

export const RepositoryCardStyles = styled.div`

  background-color: #21252c;
  padding: 8px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  p {
    color: #cecbcb;
  }

  a {
    border: none;
    background: transparent;
    color: #57F287;
    margin-left: auto;
    font-size: 14px;
    margin-top: 8px;
    transition: filter 200ms;

    &:hover {
      filter: brightness(.7);
    }
  }

  & + div {
    margin-top: 16px;
  }
`