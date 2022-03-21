import React from "react";
import PropTypes from "prop-types";
import DataPopup from "../PayerConfig/DataPopup/DataPopup";

const cell1 = ({ value }) => value.join(", ");
cell1.propTypes = {
  value: PropTypes.array,
};

const cell2 = ({ value }) => (
  <input type="checkbox" disabled defaultChecked={value} />
);
cell2.propTypes = {
  value: PropTypes.bool,
};

const cell3 = ({ value }) => <DataPopup functionality="Edit" id={value} />;
cell3.propTypes = {
  value: PropTypes.number,
};

const cell4 = ({ value }) => <DataPopup functionality="Delete" id={value} />;
cell4.propTypes = {
  value: PropTypes.number,
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
    Header: "Transaction Types",
    accessor: "transactionTypes",
    Cell: cell1,
  },
  {
    Header: "Is Active",
    accessor: "isActive",
    Cell: cell2,
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Updated On",
    accessor: "updatedOn",
  },
  {
    Header: "Edit",
    accessor: "edit",
    Cell: cell3,
  },
  {
    Header: "Delete",
    accessor: "delete",
    Cell: cell4,
  },
];
