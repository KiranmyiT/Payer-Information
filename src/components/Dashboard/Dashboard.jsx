import React from "react";
import PayerConfig from "./PayerConfig/PayerConfig";
import PayerStatus from "./PayerStatus/PayerStatus";
import {
  Dashboard,
  Navbar,
  Sidebar,
  SidebarElement,
  PayerInfo,
  TableIcon,
} from "../Styling/Dashboard-styling";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

const Info = () => {
  return (
    <Router>
      <Navbar>Payer Information</Navbar>
      <Dashboard>
        <Sidebar>
          <NavLink
            to="/PayerConfig"
            activeClassName="current"
            style={{ textDecoration: "none" }}
          >
            <SidebarElement>
              <TableIcon /> Payer Config
            </SidebarElement>
          </NavLink>
          <NavLink
            to="/PayerStatus"
            activeClassName="current"
            style={{ textDecoration: "none" }}
          >
            <SidebarElement>
              <TableIcon /> Payer Status
            </SidebarElement>
          </NavLink>
        </Sidebar>
        <PayerInfo>
          <Switch>
            <Route exact path="/">
              <Redirect to="/PayerConfig" />
            </Route>
            <Route exact path="/PayerConfig" component={PayerConfig}></Route>
            <Route exact path="/PayerStatus" component={PayerStatus}></Route>
          </Switch>
        </PayerInfo>
      </Dashboard>
    </Router>
  );
};

export default Info;
