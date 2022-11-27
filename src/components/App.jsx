import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainDos from "./MainDos/Main";
import MainTres from "./MainTres/Main";
import MainCuatro from "./MainCuatro/Main";
import MainCinco from "./MainCinco/Main";
import MainSeis from "./MainSeis/Main";
import MainSiete from "./MainSiete/Main";
import NuevoCap from "./NuevoCap/Main";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Chapter from "./Chapter/Main";
import { Material } from "../EducationPlatform/pages/Material";
import { PracticeCodeEditor } from "./CodeEditorComponents/PracticeCodeEditor/PracticeCodeEditor";
import EditarCapitulo from "./EditarCapitulo/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clases" element={<Navigate replace to="/" />} />
        <Route path="/capitulos" element={<Chapter />} />
        <Route path="/capitulos/1" element={<MainDos />} />
        <Route path="/capitulos/2" element={<MainTres />} />
        <Route path="/capitulos/3" element={<MainCuatro />} />
        <Route path="/capitulos/4" element={<MainCinco />} />
        <Route path="/capitulos/5" element={<MainSeis />} />
        <Route path="/capitulos/6" element={<MainSiete />} />
        <Route path="/practicas/:chapterId" element={<Material />} />
        <Route path="/compiler/:practiceId" element={<PracticeCodeEditor />} />
        <Route path="/clases/id_clase/crear-capitulo" element={<NuevoCap />} />
        <Route
          path="/clases/1234/editar-capitulo"
          element={<EditarCapitulo />}
        />
      </Routes>
    </BrowserRouter>
  );
};
