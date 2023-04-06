import React from 'react';
import ReactDOM from "react-dom/client";
import {Menu,Download} from 'antd';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import {UpSquareOutlined} from '@ant-design/icons'
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <Menu mode='horizontal'>
          <li>
          <UpSquareOutlined/>
            <Menu.Item key="hi" >
            <Link to="/">All
            </Link>
            </Menu.Item>
         </li>

          <li>
          <UpSquareOutlined/>
          <Menu.Item key="hi">
            <Link to="/blogs">Latest articles
            </Link>
            </Menu.Item>
          </li>
          <li>
          <UpSquareOutlined/>
          <Menu.Item key="hi ">
            <Link to="/contact">Applications
            </Link>
            </Menu.Item>
          </li>
          <li>
          <UpSquareOutlined/>
          <Menu.Item key="hi" icon=''>
            <Link to="/nopage">Hot News
            </Link>
            </Menu.Item>
          </li>
          </Menu>
        </ul>


      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<NoPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Routing;