import styled from 'styled-components'

export const ModalUserRepositoriesStyles = styled.div`
  position: relative;
  width: 500px;
  min-height: 500px;
  border-radius: 8px;
  background-color: #2F3136;
  padding: 16px 32px;
  border: 1px solid #57F287;

  .modal__header {
    display: flex;
    /* flex-direction: column; */
    margin-top: 24px;


    .image__container {

      margin-right: 8px;

      .user__image {
        flex: none;
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }
    }


    .user__content {
      margin-top: 8px;
      width: 100%;
      

      .close {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        color: #ccc;
        background-color: transparent;
        padding: 8px;
        border-radius: 50%;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      h1 {
        font-size: 24px;
        color: #99a1f5;
        margin-bottom: -6px;
      }

      span {
        font-size: 12px;
        color: #98999b;
      }
    }

  }

  .separator {
    /* content: ' '; */
    width: 100%;
    height: 2px;
    background-color: #616060;
    border-radius: 0 0 8px 8px;
    margin-top: 16px;
    margin-bottom: 4px;
  }

  .span_total_repositories{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    margin-left: auto;
    /* background-color: #fff; */
  }

  .repositories_list {
    width: 100%;
    height: 300px;
    margin-top: 16px;
    background-color: #3b3d44;
    overflow-y: scroll;
    padding: 16px 8px;

    #observerModal {
    width: 400px;
    height: 50px;
    /* background-color: blue; */
  }
  }
`