import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../shared/header/Header"; // Header

import HomePage from "../components/home/HomePage"; // HomePage

import BlogListPage from "../components/blog/BlogListPage"; //BlogListPage
import BlogDetailsPage from "../components/blog/BlogDetailsPage"; // BlogDetailsPage

import ContactPage from "../shared/contact/ContactPage"; //ContactPage

import NotFoundPage from "../shared/notfound/NotFoundPage"; //NotFoundPage

import Footer from "../shared/footer/Footer"; //Footer

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/blogs" component={BlogListPage} exact></Route>
          <Route path="/blog/:id" component={BlogDetailsPage} exact></Route>
          <Route path="/contact" component={ContactPage} exact></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
