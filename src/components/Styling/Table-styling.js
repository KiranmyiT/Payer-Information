import styled from "styled-components";

export const StyledTable = styled.table`
  padding-top: 10px;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  box-shadow: 10px 10px 5px #ccc;  
  border-radius: 7px;
  caption-side: bottom;
  width: -webkit-fill-available;
  }
  td,
  th {
    padding: 10px 10px;
    border: 1px solid;
    border-color: #c2c2c2;
  }
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightblue;
    }
  }

  td {
    :nth-of-type(odd) {
      border-color: #c2c2c2;
    }
  }
  
  thead > tr {
    background-color: #8f8389;
    color: white;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  input {
    border-radius: 7px;
    margin-top: 3px;
    padding-left: 3px;
    width: 75%;
    border: 1px;
  }
`;

export const Pagination = styled.div`
  margin: 18px;
  button {
    background-color: gray;
    color: white;
    border-radius: 7px;
  }
`;
