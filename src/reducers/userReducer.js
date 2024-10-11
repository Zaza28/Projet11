import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//thunk permet de gere de fcaon asyncrone les échnage avec le backend

//etat initial de l'user
const initialState = {
  token: localStorage.getItem("token") || null,
  currentUser: null,
  error: null,
  isEditing: false,

  
};
//fonction de connexion
export const login = createAsyncThunk(//pour etre gere dans les extra reducer
  "userSlice/login",
  async (userData, { rejectWithValue }) => {
    //console.log("login avec userData", userData)
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      return data.body;
    } catch (error) {
      //console.error("error login", error.resonse.data)
      return rejectWithValue(error.response.data);
    }
  }
);
//fonction pour recup les profils user :
export const getUser = createAsyncThunk(
  "userSlice/getUser",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().userSlice; // On récupère le token depuis le state
    // console.log("Fetching user with token:", token);
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` }, // Envoie le token dans l'en-tête Authorization
        }
      );
      return data.body;
    } catch (error) {
      // console.error("Get user error:", error.response.data);
      return rejectWithValue(error.response.data);

    }
  }
);

//fonction pour recup les profils user :
export const updateUser = createAsyncThunk(
  "userSlice/updateUser",
  async (userName, { getState, rejectWithValue }) => {
    const { token } = getState().userSlice; // On récupère le token depuis le state
    // console.log("Fetching user with token:", token);
    try {
      const { data } = await axios.put(
        "http://localhost:3001/api/v1/user/profile", { userName },
        {
          headers: { Authorization: `Bearer ${token}` }, // Envoie le token dans l'en-tête Authorization
        }
      );
      return data.body;
    } catch (error) {
      // console.error("Get user error:", error.response.data);
      return rejectWithValue(error.response.data);

    }
  }
);



// userslice recup donnée du state :
const userSlice = createSlice({
  name: "userSlice",// permet de l'appeler lorsque lon est sur le store
  initialState,//les données d"finit en haut

  reducers: {//pas besoin de l'asyncrone ou rep du backend pour action de l'user
    logout(state) {
      state.token = null;
      state.currentUser = null;
      localStorage.removeItem("token");
    },
    startEditing(state){ //fonction qu'on appel sans l'avis du backend
      state.isEditing = true;
    },
    stopEditing(state){
      state.isEditing = false;
    },
    setNewUserName(state,action){
      if (state.currentUser){
        state.currentUser.userName =action.payload; //met à jour le new username

      }
    }
  },

  extraReducers: (builder) => { //dependent de la rep du backend

      //gere le cas si la co réussi:
    builder.addCase(login.fulfilled, (state, action) => {
      // console.log("Login successful, payload:", action.payload);
      state.token = action.payload.token;
      state.currentUser = action.payload;
      state.error = null;
      localStorage.setItem("token", action.payload.token);

    });
    //gère le cas si la co échoue:
    builder.addCase(login.rejected, (state, action) => {
      // console.log("Login failed, error:", action.payload.message);
      state.token = null;
      state.currentUser = null;
      state.error = action.payload.message;
    });

    // gère la récup des infos des users :

    builder.addCase(getUser.fulfilled, (state, action) => {
      // console.log("User profile fetched, payload:", action.payload);
      state.currentUser = action.payload; // met à jour les info de l'user
    });

    builder.addCase(getUser.rejected, (state, action) => {
      // console.log("Get user failed, error:", action.payload.message);
      state.error = action.payload.message;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      // console.log("User profile fetched, payload:", action.payload);
      state.currentUser = action.payload; // met à jour les info de l'user
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      // console.log("Get user failed, error:", action.payload.message);
      state.error = action.payload.message;
    });




  },
});

export const { logout, startEditing, stopEditing, setNewUserName } = userSlice.actions;
export default userSlice.reducer;
