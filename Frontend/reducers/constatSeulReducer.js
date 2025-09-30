import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeVehicule: "",
  marqueVehicule: "",
  immatVehicule: "",
  temoinTable: [],
  vehiculeAssure: "",
  police: "",
  agence: "",
  nomAssure: "",
  prenomAssure: "",
  numTelAssure: "",
  adresseAssure: "",
  isCon: "",
  nomCon: "",
  prenomCon: "",
  adresseCon: "",
  permisCon: "",
  emailCon: "",
  accident: {
    capturedImageUri:
      "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFront-End-dc24ea75-9305-4250-bc0c-6731d1f9d9c3/ReactNative-snapshot-image4900603920861560905.jpg",
    degat: [],
    squares: Array(12).fill(false),
    descreption: "",
  },
  circonstances: {},
  dateS: "",
  heureS: "",
  lieuS: "",
  codePostalS: "",
  villeS: "",
  croquis: "",
  infoSupp: [],
  observation: "",
  signature: "",
};

const constatSeulReducer = createSlice({
  name: "constatSeul",
  initialState,
  reducers: {
    setTypeVehicule: (state, action) => {
      state.typeVehicule = action.payload;
    },
    setMarqueVehicule: (state, action) => {
      state.marqueVehicule = action.payload;
    },
    setImmatVehicule: (state, action) => {
      state.immatVehicule = action.payload;
    },
    modifieTable: (state, action) => {
      state.temoinTable = action.payload;
    },
    ajoutTémoin: (state, action) => {
      state.temoinTable.push(action.payload);
    },
    setVehiculeAssure: (state, action) => {
      state.vehiculeAssure = action.payload;
    },
    setPolice: (state, action) => {
      state.police = action.payload;
    },
    setAgence: (state, action) => {
      state.agence = action.payload;
    },
    setNomAssure: (state, action) => {
      state.nomAssure = action.payload;
    },
    setPrenomAssure: (state, action) => {
      state.prenomAssure = action.payload;
    },
    setAdresseAssure: (state, action) => {
      state.adresseAssure = action.payload;
    },
    setNumTelAssure: (state, action) => {
      state.numTelAssure = action.payload;
    },
    setIsCon: (state, action) => {
      state.isCon = action.payload;
    },
    setNomCon: (state, action) => {
      state.nomCon = action.payload;
    },
    setPrenomCon: (state, action) => {
      state.prenomCon = action.payload;
    },
    setAdresseCon: (state, action) => {
      state.adresseCon = action.payload;
    },
    setPermisCon: (state, action) => {
      state.permisCon = action.payload;
    },
    setEmailCon: (state, action) => {
      state.emailCon = action.payload;
    },
    setAccident: (state, action) => {
      state.accident = action.payload;
    },
    setCirconstance: (state, action) => {
      state.circonstances = action.payload;
    },
    setDateS: (state, action) => {
      state.dateS = action.payload;
    },
    setHeureS: (state, action) => {
      state.heureS = action.payload;
    },
    setLieuS: (state, action) => {
      state.lieuS = action.payload;
    },
    setCodePostalS: (state, action) => {
      state.codePostalS = action.payload;
    },
    setVilleS: (state, action) => {
      state.villeS = action.payload;
    },
  },
});

export const {
  typeVehicule,
  marqueVehicule,
  immatVehicule,
  setTypeVehicule,
  setMarqueVehicule,
  setImmatVehicule,
  temoinTable,
  ajoutTémoin,
  modifieTable,
  vehiculeAssure,
  police,
  agence,
  setVehiculeAssure,
  setAgence,
  setPolice,
  nomAssure,
  prenomAssure,
  adresseAssure,
  numTelAssure,
  setNomAssure,
  setPrenomAssure,
  setAdresseAssure,
  setNumTelAssure,
  setIsCon,
  isCon,
  setNomCon,
  setPrenomCon,
  setAdresseCon,
  setPermisCon,
  setEmailCon,
  nomCon,
  prenomCon,
  adresseCon,
  permisCon,
  emailCon,
  accident,
  setAccident,
  circonstances,
  setCirconstance,
  dateS,
  heureS,
  setDateS,
  setHeureS,
  setLieuS,
  setCodePostalS,
  setVilleS,
} = constatSeulReducer.actions;
export default constatSeulReducer.reducer;
