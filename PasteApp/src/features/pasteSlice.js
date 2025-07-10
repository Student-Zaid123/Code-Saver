import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
   
};
 console.log("Initial pastes from localStorage:", initialState.pastes);

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
      console.log("Pastes after add:", state.pastes); // Debug log
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p._id === paste._id);
      if (index !== -1) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Updated Successfully");
        console.log("Pastes after update:", state.pastes); // Debug log
      }
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item)=>item._id===pasteId);
      if(index>=0){
        state.pastes.splice(index,1); //Specifically particular paste to remove krdiya
         localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("All Pastes Reset Successfully");
    },
  },
});

export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions;
export default pasteSlice.reducer;