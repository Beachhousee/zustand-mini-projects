// src/components/TriggerButtons.tsx
import { useModalStore } from "../store/modalStore";

const TriggerButtons = () => {
  const { openModal, toggleModal } = useModalStore();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={toggleModal}>Toggle Modal</button>
    </div>
  );
};

export default TriggerButtons;
