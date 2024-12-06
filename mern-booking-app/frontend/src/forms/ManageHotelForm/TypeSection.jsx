import { useFormContext } from 'react-hook-form';
import { hotelTypes } from '../../config/hotel-options-config.js';

import React from 'react';

const TypeSection = () => {
  const { register } = useFormContext();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type, index) => (
          <label key={index}>
            <input
              type="radio"
              value={type}
              {...register('type', { required: 'This field is required' })}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TypeSection;
