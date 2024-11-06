import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/home';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { LicenseManagement } from './page/license/licensemanagement';

import Doc from './page/doc/doc';
import { DashboardPage } from './page/license/content/dashboard/dashboard';
import { BuyLicensePage } from './page/license/content/buylicense/buylicense';
import { LicenseManagementPage } from './page/license/content/licenseManagement/licensemanagement';
import { SupportPage } from './page/license/content/support/support';
import { BuyView } from './page/license/content/buylicense/buyView';
import { PaymentPage } from './page/license/content/buylicense/payment';
import { ForgotPassPage } from './page/forgotPass/forgotpass';
import { InformationPage } from './page/license/content/infor/information';
import { DangkyPage } from './page/testAPI/dangky';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/license" element={<LicenseManagement />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="buylicense" element={<BuyView />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="management" element={<LicenseManagementPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="my-account" element={<InformationPage />} />
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/dangky" element={<DangkyPage />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
