import React, { SyntheticEvent } from "react";
import styled from "styled-components";

interface IInputProps {
    value: string;
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => (
    <input type="text" placeholder="name" value={value} onChange={onChange}></input>
)

interface IFormProps {
    onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({children, onFormSubmit}) => (
    <form onSubmit={onFormSubmit}>{children}</form>
)