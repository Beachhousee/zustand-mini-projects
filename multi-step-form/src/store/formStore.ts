import  {create} from 'zustand'
type FormData={
    name: string;
  email: string;
  address: string;
  preference: string;
}
type FormState = {
  step: number;
  data: FormData;
  nextStep: () => void;
  prevStep: () => void;
  setFormData: (values: Partial<FormData>) => void;
  resetForm: () => void;
};


export const useFormStore =create<FormState>((set)=>({
step:1,
data:{
  name:"",
  email:"",
  address:"",
  preference:"",  
},
nextStep:()=> set((state)=>({step:state.step+1})),
prevStep:()=> set((state)=>({step:state.step-1})),
setFormData:(values)=> set((state)=>({
   data: { ...state.data, ...values },
})),
 resetForm: () =>
    set({
      step: 1,
      data: { name: "", email: "", address: "", preference: "" },
    }),
}));