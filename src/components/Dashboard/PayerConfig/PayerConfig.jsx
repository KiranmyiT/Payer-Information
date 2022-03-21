import React from "react";
import DataPopup from "./DataPopup/DataPopup";
import Table from "../Table/Table";
import { COLUMNS } from "../Table/columns";

const PayerConfig = () => {
  return (
    <div>
      <DataPopup functionality="Create" />
      <Table tableType="abc" COLUMNS={COLUMNS} />
    </div>
  );
};

export default PayerConfig;
