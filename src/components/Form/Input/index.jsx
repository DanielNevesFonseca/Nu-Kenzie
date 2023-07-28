export const Input = ({ label, placeholder, id, type, value, step, setValue }) => {
  return (
    <div className="inputBox">
      <label className="title typeFour" htmlFor={id}>
        {label}
      </label>

      {type === "number" ? (
        <input
          placeholder={placeholder}
          name={id}
          id={id}
          type={type}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          step={step}
        />
      ) : (
        <input
          placeholder={placeholder}
          name={id}
          id={id}
          type={type}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      )}
    </div>
  );
};
