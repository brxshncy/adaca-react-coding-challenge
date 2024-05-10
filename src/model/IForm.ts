import React from "react";

export interface IFormData {
    name: string;
    label: string;
}

export interface IForm {
    [key: string]: string;
}

export interface IFormBuilder {
    fields: IFormData[];
    onSubmit: (formData: IForm) => void;
}

export interface IFormField {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
