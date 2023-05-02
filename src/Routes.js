import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { About, Contact, Projects, Home, Site, ProjectDetails } from "./components"

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/this-site" element={<Site />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
}

export default AppRoutes