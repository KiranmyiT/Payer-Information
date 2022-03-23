import React, { useEffect, useMemo } from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import {
  SmallPopup,
  MessageContent,
  FieldContent,
  PopupFlex,
  CloseButton,
  SaveButton,
  TransactionInput,
  OkButton,
} from "../../../Styling/DataPopup-styling";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePayer, updatePayer } from "../../../../redux/actions";
import { useForm } from "react-hook-form";

const EditDataPopup = (props) => {
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.updatedOn = new Date().toLocaleDateString();
    data.edit = props.id;
    data.delete = props.id;
    dispatch(updatePayer(data, props.id));
  };

  const { payer } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getSinglePayer(props.id));
  });

  const data = useMemo(() => payer);

  return (
    <div>
      <h3 className="header"> Update Payer </h3>
      <PopupFlex>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <MessageContent>
              <FieldContent>
                <div>
                  Payer ID: <span>*</span>
                </div>
                <input
                  type="text"
                  defaultValue={data.payerId}
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("payerId", {
                    required: true,
                    minLength: 5,
                    pattern: /^[A-Za-z0-9]+$/i,
                  })}
                />
              </FieldContent>
              <FieldContent>
                <div>
                  Payer Name: <span>*</span>
                </div>
                <input
                  type="text"
                  defaultValue={data.payerName}
                  {...register("payerName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </FieldContent>
              <FieldContent>
                <div>Trading Partner ID:</div>
                <TransactionInput>
                  <input
                    type="text"
                    defaultValue={data.tradingPartnerId}
                    {...register("tradingPartnerId", {
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                </TransactionInput>
              </FieldContent>
              <FieldContent>
                <div>
                  Transaction Types: <span>*</span>
                </div>

                <div>
                  <select
                    id="transactionTypes"
                    name="transactionTypes"
                    multiple
                    defaultValue={data.transactionTypes}
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
                  Is Active:
                  <input
                    type="checkbox"
                    {...register("isActive")}
                    defaultChecked={data.isActive}
                  />
                </div>
              </FieldContent>
              <FieldContent>
                <div>
                  <div style={{ marginTop: "5px" }}>
                    <label>Status:</label>
                  </div>
                  {data.status === "Dark" && (
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="Dark"
                        checked
                        {...register("status")}
                      />
                      <label>Dark</label>
                    </div>
                  )}
                  {data.status !== "Dark" && (
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="Dark"
                        {...register("status")}
                      />
                      <label>Dark</label>
                    </div>
                  )}
                  {data.status === "Live" && (
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="Live"
                        checked
                        {...register("status")}
                      />
                      <label>Live</label>
                    </div>
                  )}
                  {data.status !== "Live" && (
                    <div>
                      <input
                        type="radio"
                        name="status"
                        value="Live"
                        {...register("status")}
                      />
                      <label>Live</label>
                    </div>
                  )}
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
                    {((errors.payerId && errors.payerId.type === "required") ||
                      (errors.payerName &&
                        errors.payerName.type === "required") ||
                      (errors.transactionTypes &&
                        errors.transactionTypes.type === "required")) && (
                      <span>*Please fill mandatory field*</span>
                    )}
                    {errors.payerId && errors.payerId.type === "minLength" && (
                      <span>*Min 5 char required*</span>
                    )}
                    {((errors.payerId && errors.payerId.type === "pattern") ||
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
                    className="button"
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
      </PopupFlex>
    </div>
  );
};

EditDataPopup.propTypes = {
  id: PropTypes.number,
};

export default EditDataPopup;
