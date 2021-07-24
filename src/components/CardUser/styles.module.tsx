import styled from 'styled-components'

export const CardUserStyles = styled.div`
  display: flex;
  position: relative;

  width: 400px;
  padding: 16px;
  border-radius: 8px;
  background-color: #2F3136;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #40444B;
    border-radius: 8px 0 0 8px;
    transition: background-color 500ms;
  }

  &:hover {
    background-color:#2F3136;

    &::before {
      background-color: #57F287;
    }
  }

  img {
    border-radius: 50%;
  }

  .user__content {
    width: 100%;
    margin-left: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;

      span {
        font-size: 12px;
        color: #98999b;
      }
  
      p {
        font-size: 12px;
        color: #98999b;
        span {
          color: #FFF;
        }
      }
    }

    h2 {
      margin-top: 8px;
      font-size: 20px;
      color: #99a1f5;
      margin-bottom: -6px;
    }
    
    .span_login {
      display: inline-block;
      font-size: 12px;
      color: #98999b;
    }

    button {
      display: flex;
      font-size: 12px;
      color: #57F287;
      background: transparent;
      border: none;
      margin-left: auto;
      margin-top: 16px;
      transition: filter 200ms;

      align-items: center;

      &:hover {
        filter: brightness(.7);
      }
    }
  }
`