import { useFormStore } from "../store/formStore";

const StepTwo = () => {
  const { data, setFormData, nextStep, prevStep } = useFormStore();

  return (
    <div>
      <h2>Step 2: Address</h2>
      <input
        type="text"
        placeholder="Address"
        value={data.address}
        onChange={(e) => setFormData({ address: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepTwo;
