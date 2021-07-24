import styled from 'styled-components'

export const HeaderStyles = styled.section`
  background-color: #2F3136;
  
  .container {
    padding: 16px 8px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
      width: 100%;
      margin-top: 32px;
      margin-bottom: 8px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
        max-width: 500px;
        background-color: #40444B;
        padding: 8px 16px;
        color: #b8babe;
        border: none;
        box-shadow: none;
        border-radius: 8px 0 0 8px;
        /* margin-right: 16px; */

        &:focus {
          outline-color: #0011ff;
          outline-style: solid;
        }
      }

      button {
        padding: 8px 16px;
        border: none;
        background-color: #5D77F2;
        color: #FFFFFF;
        border-radius: 0 8px 8px 0;
        transition: background-color 200ms;

        &:hover {
          background-color: #4B5FC5;
        }
      }
    }
  }
`