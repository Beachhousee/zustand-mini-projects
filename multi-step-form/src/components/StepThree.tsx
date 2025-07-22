import { useFormStore } from "../store/formStore";

const StepThree = () => {
  const { data, setFormData, nextStep, prevStep } = useFormStore();

  return (
    <div>
      <h2>Step 3: Preferences</h2>
      <input
        type="text"
        placeholder="Preference"
        value={data.preference}
        onChange={(e) => setFormData({ preference: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepThree;
