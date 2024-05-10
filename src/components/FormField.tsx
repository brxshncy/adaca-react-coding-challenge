import React from "react";
import { IFormField } from "../model/IForm";

const FormField: React.FC<IFormField> = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input type='text' value={value} onChange={onChange} />
        </div>
    );
};

export default FormField;
