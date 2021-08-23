import React from "react";

import FormField from "./FormField";

const FormSection = (props) => {
  return (
    <>
      <FormField
        // addItem={props.addItem}
        // editItem={props.editItem}
        // editValue={props.editValue}
        // toggleBtnSubmit={props.toggleBtnSubmit}
        {...props}
      />
    </>
  );
};
export default FormSection;
