import React from "react";
import { useAuth, useData } from "../../../context";
import { addToAddress, updateFromAddress } from "../../../services";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";

export function AddressForm({
  addressForm,
  setAddForm,
  formDisplay,
  setFormDisplay,
  formValue,
}) {
  const { dataDispatch } = useData();
  const { token } = useAuth();

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setAddForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const cancelForm = (e) => {
    e.preventDefault();
    setFormDisplay(false);
    setAddForm(formValue);
  };

  const fillFormValueWithDummy = (e) => {
    e.preventDefault();
    setAddForm((form) => ({
      ...form,
      name: "Admin",
      street: "new pune road",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      zipCode: "411046",
      mobile: "12345678",
    }));
  };

  const saveHandler = (e) => {
    e.preventDefault();
    addressForm._id
      ? updateFromAddress(
          dataDispatch,
          addressForm,
          token,
          toast,
          setFormDisplay
        )
      : addToAddress(dataDispatch, addressForm, token, toast, setFormDisplay);
  };

  return (
    <div
      className={`address-form-container flex-center ${
        !formDisplay ? "displayNone" : "displayFlex"
      }`}
    >
      <Form className="address-form" onSubmit={saveHandler}>
        <h4>ADD NEW ADDRESS</h4>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={addressForm.name}
            onChange={(e) => fillFormValue(e, "name")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter House No., Road, Colony"
            value={addressForm.street}
            onChange={(e) => fillFormValue(e, "street")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={addressForm.city}
            onChange={(e) => fillFormValue(e, "city")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            value={addressForm.state}
            onChange={(e) => fillFormValue(e, "state")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={addressForm.country}
            onChange={(e) => fillFormValue(e, "country")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formZipCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={addressForm.zipCode}
            onChange={(e) => fillFormValue(e, "zipCode")}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mobile Number"
            value={addressForm.mobile}
            onChange={(e) => fillFormValue(e, "mobile")}
            required
          />
        </Form.Group>

        <div className="address-form-btn">
          <Button variant="primary" type="submit" className="mr-2">
            Save
          </Button>
          <Button variant="danger" onClick={cancelForm} className="mr-2">
            Cancel
          </Button>
          <Button variant="default" onClick={fillFormValueWithDummy}>
            Fill with Dummy Values
          </Button>
        </div>
      </Form>
    </div>
  );
}
