import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import {
  DeletePopup,
  MessageContent,
  CloseButton,
  OkButton,
} from "../../../Styling/DataPopup-styling";
import styled from "styled-components";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { useDispatch } from "react-redux";
import { deletePayer } from "../../../../redux/actions";

const DeleteIcon = styled(Delete)`
  width: 30px;
  height: 30px;
`;

const DeleteDataPopup = (props) => {
  let dispatch = useDispatch();

  return (
    <Popup trigger={<DeleteIcon />} modal nested>
      {(close) => (
        <DeletePopup className="modal">
          <CloseButton className="close" onClick={close}>
            &times;
          </CloseButton>
          <MessageContent>
            <div className="content"> Are you sure you want to delete?</div>
          </MessageContent>
          <div className="actions">
            <OkButton
              className="button"
              onClick={() => {
                dispatch(deletePayer(props.id));
                close();
              }}
            >
              Delete
            </OkButton>
          </div>
        </DeletePopup>
      )}
    </Popup>
  );
};

DeleteDataPopup.propTypes = {
  id: PropTypes.number,
};

export default DeleteDataPopup;
