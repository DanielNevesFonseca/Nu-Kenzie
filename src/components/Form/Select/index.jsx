export const Select = ({ id, setValue }) => {
  return (
    <div className="selectBox">
      <h4 className="title typeFour">Tipo de valor</h4>
      <select
        name={id}
        id={id}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="">Escolha uma opção</option>
        <option value="1">Entrada</option>
        <option value="0">Saída</option>
      </select>
    </div>
  );
};
