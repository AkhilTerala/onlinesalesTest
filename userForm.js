import React, { useState } from 'react';

const App = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});

  const addFormField = (type) => {
    setFormFields([...formFields, { type, label: '', options: [] }]);
  };

  const removeFormField = (index) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    setFormFields(updatedFormFields);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormFields = [...formFields];
    updatedFormFields[index][name] = value;
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Dynamic Form Generator</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.type}</label>
            <input
              type="text"
              name="label"
              value={field.label}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button type="button" onClick={() => removeFormField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addFormField('text')}>Add Text Input</button>
        <button type="button" onClick={() => addFormField('textarea')}>Add Text Area</button>
        <button type="button" onClick={() => addFormField('dropdown')}>Add Dropdown</button>
        <button type="button" onClick={() => addFormField('checkbox')}>Add Checkbox</button>
        <button type="button" onClick={() => addFormField('radio')}>Add Radio Button</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
