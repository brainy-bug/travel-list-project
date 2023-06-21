import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [formData, setFormData] = useState({
    description: "",
    quantity: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description) return;

    const newItem = {
      id: Date.now(),
      description: formData.description,
      quantity: formData.quantity,
      packed: false,
    };

    onAddItems(newItem);

    setFormData({
      description: "",
      quantity: 1,
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for you trip? 😍😍</h3>
      <select name='quantity' value={formData.quantity} onChange={handleChange}>
        {Array.from({ length: 20 }, (_, num) => (
          <option key={num} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item...'
        name='description'
        value={formData.description}
        onChange={handleChange}
      />
      <button>add</button>
    </form>
  );
};
export default Form;
