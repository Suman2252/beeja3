import { useEffect, useState } from "react";
import "./styles/theme.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import CourseDetails from "./pages/CourseDetails";
import Catalog from "./pages/Catalog";
import InstituteService from "./pages/InstituteService";
import StudentService from "./pages/StudentService";

import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings/Settings";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import Instructor from "./components/core/Dashboard/Instructor";
import Cart from "./components/core/Dashboard/Cart/Cart";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import AccessRequests from "./components/core/Dashboard/AccessRequests";

import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";

import { ACCOUNT_TYPE } from "./utils/constants";
import { HiArrowNarrowUp } from "react-icons/hi";

function App() {
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Go upward arrow - show/hide
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = () => {
    if (window.scrollY > 500) {
      setShowArrow(true);
    } else setShowArrow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleArrow);
    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, [showArrow]);

  return (
      <div className="w-screen min-h-screen flex flex-col font-inter" style={{ backgroundColor: 'var(--background-primary)', color: 'var(--text-primary)' }}>
        <Navbar />

        {/* Go upward arrow */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={`bg-yellow-25 hover:bg-yellow-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-50 duration-500 ease-in-out ${
            showArrow ? "bottom-6" : "-bottom-24"
          }`}
        >
          <HiArrowNarrowUp />
        </button>

        <div className="pt-14">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/institute-service" element={<InstituteService />} />
          <Route path="/student-service" element={<StudentService />} />
          <Route path="catalog/:catalogName" element={<Catalog />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />

          {/* Open Route - for Only Non Logged in User */}
          <Route
            path="signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />

          <Route
            path="login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />

          <Route
            path="forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
          />

          <Route
            path="verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />

          <Route
            path="update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />

          {/* Protected Route - for Only Logged in User */}
          {/* Dashboard */}
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/Settings" element={<Settings />} />

            {/* Route only for Students */}
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="dashboard/access-requests" element={<AccessRequests />} />
              </>
            )}

            {/* Route only for Instructors */}
            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
            )}
          </Route>

          {/* For the watching course lectures */}
          <Route
            element={
              <ProtectedRoute>
                <ViewCourse />
              </ProtectedRoute>
            }
          >
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            )}
          </Route>

          {/* Page Not Found (404 Page) */}
          <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
