import FormBuilder from "./FormBuilder";
import React from "react";

// Example Usage of FormBuilder Component
const DynamicForm = () => {
    const formFields = [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone" },
    ];

    const handleFormSubmit = (formData: any) => {
        // Do something with the submitted data
        console.log("Form Data:", formData);
    };

    return (
        <div>
            <h2>Dynamic Form Builder</h2>
            <FormBuilder fields={formFields} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default DynamicForm;
