import styled from "styled-components";

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  margin-left: 300px;
  caption-side: bottom;
  
  td,
  th {
    padding: 5px 10px;
    border: 1px solid;
  }
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
