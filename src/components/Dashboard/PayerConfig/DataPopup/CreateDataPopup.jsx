import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import {
  CreatePopup,
  SmallPopup,
  Button,
  MessageContent,
  FieldContent,
  Actions,
  PopupFlex,
  CloseButton,
  SaveButton,
  CancelButton,
  OkButton,
} from "../../../Styling/DataPopup-styling";
import { useDispatch } from "react-redux";
import { addPayer } from "../../../../redux/actions";
import { useForm } from "react-hook-form";

const CreateDataPopup = (props) => {
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.updatedOn = new Date().toLocaleDateString();
    dispatch(addPayer(data));
  };

  return (
    <Popup
      trigger={<Button className="button">{props.functionality}</Button>}
      modal
      nested
    >
      {(close) => (
        <CreatePopup className="modal">
          <CloseButton className="close" onClick={close}>
            &times;
          </CloseButton>
          <h3 className="header"> Create Payer </h3>
          <PopupFlex>
            <div className="content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <MessageContent>
                  <FieldContent>
                    <label>
                      Payer ID: <span>*</span>
                    </label>
                    <input
                      type="text"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("payerId", {
                        required: true,
                        minLength: 5,
                        pattern: /^[A-Za-z0-9]+$/i,
                      })}
                    />
                  </FieldContent>
                  <FieldContent>
                    <label>
                      Payer Name: <span>*</span>
                    </label>
                    <input
                      type="text"
                      {...register("payerName", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                  </FieldContent>
                  <FieldContent>
                    <label>Trading Partner ID:</label>
                    <div>
                      <input
                        type="text"
                        {...register("tradingPartnerId", {
                          pattern: /^[A-Za-z]+$/i,
                        })}
                      />
                    </div>
                  </FieldContent>
                  <FieldContent>
                    <label>
                      Transaction Types: <span>*</span>
                    </label>
                    <div>
                      <select
                        name="transactionTypes"
                        multiple
                        {...register("transactionTypes", {
                          required: true,
                        })}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="PAC">PAC</option>
                        <option value="MAC">MAC</option>
                        <option value="CSI">CSI</option>
                        <option value="Elig">Elig</option>
                      </select>
                    </div>
                  </FieldContent>
                  <FieldContent>
                    <div>
                      <label>Is Active:</label>
                      <input
                        type="checkbox"
                        {...register("isActive")}
                        defaultChecked={true}
                      />
                    </div>
                  </FieldContent>
                  <FieldContent>
                    <div>
                      <div style={{ marginTop: "5px" }}>
                        <label>Status:</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          name="status"
                          value="Dark"
                          {...register("status")}
                        />
                        <label>Dark</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="status"
                          value="Live"
                          {...register("status")}
                        />
                        <label>Live</label>
                      </div>
                    </div>
                  </FieldContent>
                </MessageContent>

                <Popup
                  trigger={<SaveButton type="submit" value="Save"></SaveButton>}
                  position="top center"
                  nested
                >
                  {(close) => (
                    <SmallPopup className="modal">
                      <CloseButton className="close" onClick={close}>
                        &times;
                      </CloseButton>
                      <MessageContent>
                        {((errors.payerId &&
                          errors.payerId.type === "required") ||
                          (errors.payerName &&
                            errors.payerName.type === "required") ||
                          (errors.transactionTypes &&
                            errors.transactionTypes.type === "required")) && (
                          <span>*Please fill mandatory field*</span>
                        )}
                        {errors.payerId &&
                          errors.payerId.type === "minLength" && (
                            <span>*Min 5 char required*</span>
                          )}
                        {((errors.payerId &&
                          errors.payerId.type === "pattern") ||
                          (errors.payerName &&
                            errors.payerName.type === "pattern") ||
                          (errors.tradingPartnerId &&
                            errors.tradingPartnerId.type === "pattern")) && (
                          <span>*Special characters not allowed*</span>
                        )}
                        {!(
                          errors.payerId ||
                          errors.payerName ||
                          errors.tradingPartnerId ||
                          errors.transactionTypes
                        ) && <span>Data Saved Successfully!</span>}
                      </MessageContent>
                      <OkButton
                        className="button justify-self-center"
                        onClick={() => {
                          close();
                        }}
                      >
                        Ok
                      </OkButton>
                    </SmallPopup>
                  )}
                </Popup>
              </form>
            </div>
            <Actions className="actions"></Actions>
          </PopupFlex>
          <CancelButton
            className="button justify-self-center"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </CancelButton>
        </CreatePopup>
      )}
    </Popup>
  );
};

CreateDataPopup.propTypes = {
  functionality: PropTypes.string,
};

export default CreateDataPopup;
