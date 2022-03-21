import styled from "styled-components";

export const CreatePopup = styled.div`
  border: 1px solid gray;
  box-shadow: 7px 7px 5px gray;
  background: #f8f8f8;
  width: 735px;
  height: 418px;
  justify-items: left;
  border-radius: 7px;

  div {
    span {
      color: red;
    }
  }

  h3 {
    margin-left: 10%;
    margin-bottom: 0;
  }
`;
export const EditPopup = styled.div`
  border: 1px solid gray;
  box-shadow: 7px 7px 5px gray;
  background: #f8f8f8;
  width: 735px;
  height: 418px;
  justify-items: left;
  border-radius: 7px;

  div {
    span {
      color: red;
    }
  }

  h3 {
    margin-left: 10%;
    margin-bottom: 0;
  }
`;
export const DeletePopup = styled.div`
  border: 1px solid gray;
  box-shadow: 7px 7px 5px gray;
  background: #f8f8f8;
  width: 345px;
  height: 138px;
  justify-items: left;
  border-radius: 7px;

  h3 {
    margin-left: 8%;
    margin-bottom: 0;
  }
`;
export const SmallPopup = styled.div`
  background: white;
  width: 300px;
  border: 1px solid gray;
  box-shadow: 7px 7px 5px gray;
  border-radius: 7px;
`;

export const OkButton = styled.button`
  min-width: 45px;
  height: 29px;
  border-radius: 7px;
  background: #59375f;
  color: white;
  margin-left: 40%;
`;

export const Button = styled.button`
  width: 68px;
  height: 31px;
  border-radius: 7px;
  background: #59375f;
  color: white;
  margin-right: 95%;
  margin-bottom: 15px;
`;
export const CloseButton = styled.button`
  width: 30px;
  height: 29px;
  border-radius: 7px;
  background: #59375f;
  color: white;
`;
export const SaveButton = styled.input`
  width: 65px;
  height: 32px;
  border-radius: 7px;
  background: #59375f;
  color: white;
  margin-left: 37%;
  margin-top: 1%;
  font-weight: 700;
`;
export const CancelButton = styled.button`
  width: 62px;
  height: 32px;
  border-radius: 7px;
  background: #59375f;
  color: white;
  margin-left: 49%;
  margin-top: -4.4%;
  position: absolute;
`;
export const MessageContent = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    color: red;
  }
`;
export const FieldContent = styled.div`
  padding: 6px;
  flex: 48%;
  ${"" /* text-align: center; */}
  display: flex;
    flex-direction: column;

  select {
    ${"" /* margin-left: 36px; */}
    margin-top: 9px;
    width: 200px;
  }
  input {
    ${"" /* margin-left: 36px; */}
    width: max-content;
    font-size: 15px;
    margin-top: 9px;
    padding: 6px;
}
  }
  div {
    float: left;
  }
`;
export const Actions = styled.div`
  display: flex;
  padding-left: 40%;
`;

export const PopupFlex = styled.div`
  margin-left: 7%;
  margin-right: 7%;
`;

export const TransactionInput = styled.div`
  float: right !important;
  margin-right: 23px;
`;
