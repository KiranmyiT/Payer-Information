import React from "react";
import PropTypes from "prop-types";
import CreateDataPopup from "../DataPopup/CreateDataPopup";
import DeleteDataPopup from "../DataPopup/DeleteDataPopup";
import Popup from "reactjs-popup";
import EditDataPopup from "./EditDataPopup";
import {
  EditPopup,
  CloseButton,
  CancelButton,
} from "../../../Styling/DataPopup-styling";
import styled from "styled-components";
import { EditOutline } from "@styled-icons/evaicons-outline/EditOutline";

const EditIcon = styled(EditOutline)`
  width: 30px;
  height: 30px;
`;
const DataPopup = (props) => {
  if (props.functionality === "Create") {
    return <CreateDataPopup functionality="Create" />;
  } else if (props.functionality === "Edit") {
    return (
      <Popup trigger={<EditIcon />} modal nested>
        {(close) => (
          <EditPopup>
            <CloseButton className="close" onClick={close}>
              &times;
            </CloseButton>
            <div className="modal">
              <EditDataPopup id={props.id} />
            </div>

            <CancelButton
              className="button justify-self-center"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </CancelButton>
          </EditPopup>
        )}
      </Popup>
    );
  } else if (props.functionality === "Delete") {
    return <DeleteDataPopup id={props.id} />;
  }
};

DataPopup.propTypes = {
  functionality: PropTypes.string,
  id: PropTypes.number,
};

export default DataPopup;
