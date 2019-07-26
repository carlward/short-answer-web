import React from "react";

const TextArea = props => {
  let formControl = "form-input";
  if (props.touched && !props.valid) {
    formControl = 'form-input input-error';
  }

  return (
    <div className="form-group">
      <textarea {...props} className={formControl} />
    </div>
  );
}

export default TextArea
