import styled from 'styled-components'

export const GridCardStyles = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  justify-items: center;

  #observer {
    width: 400px;
    height: 80px;
    /* background-color: ; */
  }

  #modal_background_transparent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    .modal_motion {
      z-index: 1000;
  
  
      .button_motion {
        width: 100px;
        height: 20px;
      }
    }
  }

  .modal__background {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #333333ab;
    opacity: 1;
    z-index: 700;
  }

`