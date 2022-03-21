import styled from "styled-components";
import { Table } from "@styled-icons/boxicons-regular/Table";

export const Dashboard = styled.div`
  width: 100%;
  display: flex;
`;
export const Navbar = styled.div`
  width: 100%;
  background: #593767;
  color: white;
  text-align: left;
  padding: 15px;
  font-size: 21px;
`;
export const Sidebar = styled.div`
  width: 320px;
  border-right: 1px solid #c0c0c0;
`;
export const SidebarElement = styled.div`
  text-decoration: none;
  font-weight: 550;
  padding: 15px;
  border: 1px solid #efefef;
  color: #593767;
  :hover {
    background-color: #efefef;
  }
`;
export const PayerInfo = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;
`;

export const TableIcon = styled(Table)`
  width: 30px;
  height: 30px;
`;
