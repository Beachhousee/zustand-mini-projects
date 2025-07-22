import { useFormStore } from "../store/formStore";

const StepOne = () => {
  const { data, setFormData, nextStep } = useFormStore();

  return (
    <div>
      <h2>Step 1: Basic Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setFormData({ name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setFormData({ email: e.target.value })}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepOne;
