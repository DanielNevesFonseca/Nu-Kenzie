import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { ButtonSubmit } from "./ButtonSubmit";

export const Form = ({ addTransaction }) => {
  const [description, setDescription] = useState();
  const [costValue, setCostValue] = useState();
  const [selectOption, setSelectOption] = useState();
  const [hasEmptyValues, setHasEmptyValues] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const validationList = [description, costValue, selectOption];
    let hasInvalidValue = false;

    for (let i = 0; i <= validationList.length - 1; i++) {
      const value = validationList[i];
      if (value === undefined || value === "") {
        hasInvalidValue = true;
        break;
      } else {
        hasInvalidValue = false;
      }
    }

    if (hasInvalidValue) {
      setHasEmptyValues(true);
    } else {
      addTransaction({ description, costValue, selectOption });
      // Reset values
      setDescription("");
      setCostValue("");
      setHasEmptyValues(false);
    }
  };

  return (
    <div className="formSection">
      <form onSubmit={submit} className="form">
        <Input
          label={"Descrição"}
          placeholder={"Digite aqui sua descrição"}
          type={"text"}
          id={"description"}
          value={description}
          setValue={setDescription}
        />
        <Input
          label={"Valor (R$)"}
          placeholder={"Digite o valor numérico"}
          type={"number"}
          id={"costValue"}
          value={costValue}
          setValue={setCostValue}
          step={0.01}
        />
        <Select id={selectOption} setValue={setSelectOption} />
        {hasEmptyValues ? <span>Preencha todos os campos!</span> : <></>}
        <ButtonSubmit />
      </form>
    </div>
  );
};
