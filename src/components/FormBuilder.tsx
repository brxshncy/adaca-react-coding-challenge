import React, { useState } from "react";
import FormField from "./FormField";
import { IFormData, IFormBuilder, IForm } from "../model/IForm";

const FormBuilder: React.FC<IFormBuilder> = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState<IForm>({} as IForm);

    const handleFieldChange = (fieldName: string, fieldValue: string) => {
        setFormData({ ...formData, [fieldName]: fieldValue });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <FormField
                    key={index}
                    label={field.label}
                    value={formData[field.name] || ""}
                    onChange={(event) =>
                        handleFieldChange(field.name, event.target.value)
                    }
                />
            ))}
            <button type='submit'>Submit</button>
        </form>
    );
};

export default FormBuilder;
