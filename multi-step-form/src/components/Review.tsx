
import { useFormStore } from "../store/formStore";

const Review = () => {
  const { data, resetForm, prevStep } = useFormStore();

  return (
    <div>
      <h2>Review & Submit</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={resetForm}>Submit & Reset</button>
    </div>
  );
};

export default Review;
