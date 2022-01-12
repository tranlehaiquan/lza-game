import { useField } from 'formik';
import React from 'react';
import TextInput from './TextInput';

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  uppercase?: boolean
};

const TextInputFormik: React.FC<Props> = ({ name, uppercase, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <TextInput
      name={name}
      {...rest}
      value={field.value}
      onChange={(e) => {
        if(uppercase) e.target.value = e.target.value.toUpperCase()
        field.onChange(e)
      }}
      onBlur={field.onBlur}
      isError={!!(meta.touched && meta.error)}
      message={!!(meta.touched && meta.error) ? meta.error : ''}
    />
  );
};

export default TextInputFormik;
