import React from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import Signup from '../../authElements/Signup.js';

export default function AuthTemplate() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
