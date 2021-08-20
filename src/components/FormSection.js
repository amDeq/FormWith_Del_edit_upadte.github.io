import React from "react";

import FormField from "./FormField";

const FormSection = (props) => {
  return (
    <>
      <FormField
        addItem={props.addItem}
        editItem={props.editItem}
        editValue={props.editValue}
        editId={props.editId}
        toggleBtnSubmit={props.toggleBtnSubmit}
      />
    </>
  );
};
export default FormSection;
