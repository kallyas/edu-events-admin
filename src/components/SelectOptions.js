
  export const selectOptions = [
    { value: 'webinar', label: 'Webinar' },
    { value: 'legal tech', label: 'Legal Tech' },
    { value: 'mental health', label: 'Mental Health' },
    { value: 'online class', label: 'Online class' },
    { value: 'digital marketing', label: 'Digital Marketing' },
  ];

  export const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    multiValue: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    placeholder: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return {
        ...provided,
        opacity,
        transition,
      };
    },
  };
