import React from 'react';

interface IInputProps{
    value: string
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => (
    <input type="text" placeholder="Name" value={value} onChange={onChange}/>
)


interface IFormProps{
    onFormSubmit: (event: React.FormEvent) => void
}

// FunctionComponent 는 기본적으로 children이라고 하는 props를 갖는다.
export const Form: React.FunctionComponent<IFormProps> = ({children, onFormSubmit}) => (
<form onSubmit={onFormSubmit}>{children}</form>
)
