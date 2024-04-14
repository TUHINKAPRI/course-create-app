import { createSlice } from "@reduxjs/toolkit";


const initialState={
courses:[],
}


const courseSlice=createSlice({
  name:"all_courses",
  initialState,
  reducers:{
    allCourses:(state,{payload})=>{
      state.courses=payload
    }
  }
})


export  default courseSlice.reducer;
export const {allCourses} =courseSlice.actions