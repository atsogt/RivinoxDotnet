import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentList from "./StudentList";
import AddBatch from "../component/batch/AddBatch";
import Header from "../component/Header";
import GradeHomework from "./GradeHomework";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RemoveBatch from "../component/batch/RemoveBatch";
import { apiService } from "../api/axios";
import VerticalTabs from "../component/batch/VerticalTabs";
import { useSelector, useDispatch } from "react-redux";
import { getBatch } from "../duck/batchSlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminLanding() {
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [batch, setBatch] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getBatch());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Box component="div" sx={{ width: "100%", mt: 15 }}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Student List" {...a11yProps(0)} />
            <Tab label="Batch" {...a11yProps(1)} />
            <Tab label="Grade Homework" {...a11yProps(3)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <StudentList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VerticalTabs  />
        </TabPanel>
    
        <TabPanel value={value} index={2}>
          <GradeHomework  />
        </TabPanel>
      </Box>
      {/* <Test /> */}
    </>
  );
}
