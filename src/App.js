import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Normalize style
import 'normalize.css';
// Style
import './index.scss';
import styles from './app.module.scss';
// Component
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const MainPage = React.lazy(() => import("./pages/main/Main.page"));
const CommentsPage = React.lazy(() => import("./pages/commentsPage/CommentsPage"));
const ProjectsPage = React.lazy(() => import("./pages/projects/Projects.page"));
const About = React.lazy(() => import("./pages/about/About"));
const AuthorizationPage = React.lazy(() => import("./pages/authorization/Authorization.page"));

const App = () => {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div className={styles.appWrapper}>
          <Header />
          <Routes>
            <Route path='/' element={
              <Suspense fallback={<div>Загрузна головної сторінки...</div>}>
                <MainPage />
              </Suspense>} />
            <Route path='comments' element={
              <Suspense fallback={<div>Загрузна проектів сторінки...</div>}>
                <CommentsPage />
              </Suspense>} />
            <Route path='about' element={
              <Suspense fallback={<div>Загрузна проектів сторінки...</div>}>
                <About />
              </Suspense>} />
            <Route path='projects' element={
              <Suspense fallback={<div>Загрузна проектів сторінки...</div>}>
                <ProjectsPage />
              </Suspense>} />
            <Route path='authorization' element={
              <Suspense fallback={<div>Загрузна проектів сторінки...</div>}>
                <AuthorizationPage />
              </Suspense>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
