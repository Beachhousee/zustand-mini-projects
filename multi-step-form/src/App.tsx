import { useFormStore } from "./store/formStore";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Review from "./components/Review";

function App() {
  const { step } = useFormStore();

  return (
    <div>
      <h1>Zustand Multi-Step Form</h1>
      <h3>Current Step: {step}</h3>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <Review />}
    </div>
  );
}

export default App;
