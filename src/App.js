import React, { useState, useEffect, Fragment } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { Box } from "@material-ui/core";

import AdminDashboard from "./Components/AdminPanel/AdminDashboard/AdminDashboard";

import {motion} from "framer-motion";
import Error from "./Components/Error";
import AllProducts from "./Components/AdminPanel/AdminDashboard/AllProducts";
import AddProducts from "./Components/AdminPanel/AdminDashboard/AddProducts";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const App = () => {  
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <motion.div initial="hidden" animat="show" >
      {loading ? (
        <>
          <Box style={{ marginTop: "15%" }}>
            <HashLoader
              color="#03045E"
              loading={loading}
              css={override}
              size={150}
            />
          </Box>
        </>
      ) : (
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route  exact  path="/*"  element={<AdminDashboard />} />
               <Route exact path="*" element={<Error/>}/>
                 {/* <Route exact path="/allPr" element={<AllProducts/>}/>
          <Route exact path="/addProduct" element={<AddProducts/>}/> */}

            </Routes>
          </Fragment>
        </BrowserRouter>
      )}
      </motion.div>
    </>
  );
};
export default App;
