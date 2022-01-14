import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/appointment"
              element={<PrivateRoute>
                <Appointment />
              </PrivateRoute>}
            >
            </Route>
            {/* router in the dashboard */}
            <Route path="/dashboard"
              element={
                <PrivateRoute>  <Dashboard />   </PrivateRoute>
              }>
              <Route path='/dashboard' element={<DashboardHome />}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`}
                element={<Payment />}
              >
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={
                <AdminRoute><MakeAdmin /></AdminRoute>
              }>

              </Route>
              <Route path={`/dashboard/addDoctor`} element={
                <AdminRoute><AddDoctor /></AdminRoute>
              }>
              </Route>

            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/" element={<Home />}>

            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
