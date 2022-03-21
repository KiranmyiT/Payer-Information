import React from "react";
import PropTypes from "prop-types";

const cell = ({ value }) => (
  <input type="checkbox" disabled defaultChecked={value} />
);

cell.propTypes = {
  value: PropTypes.bool,
};

export const COLUMNS = [
  {
    Header: "Payer Id",
    accessor: "payerId",
  },
  {
    Header: "Payer Name",
    accessor: "payerName",
  },
  {
    Header: "Trading Partner ID",
    accessor: "tradingPartnerId",
  },
  {
    Header: "Is Active",
    accessor: "isActive",
    Cell: cell,
  },
];
