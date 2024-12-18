import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { courseList } from "../component/course";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../duck/drawerSlice";
import { apiService } from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CourseListDrawer() {
  const navigate = useNavigate();
  const isDrawer = useSelector((state) => state.drawer.open);
  const batchId = useSelector((state) => state.batch.batchId);
  const [courseList, setCourseList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
 
    const getEnrollments = async() =>{

      try {
        
        const response = await apiService.get(`http://localhost:5122/api/curriculum/batch/${batchId}`)
        if(response?.data){
          setCourseList(response.data)

        }
      } catch (error) {
        console.log(error);
      }
    }
    if(batchId){

      getEnrollments()
    }
  }, [batchId]);

  const navigateToEnrollments = (curriculumId) => {
     navigate(`/student/curriculumId/${curriculumId}`)
  }


  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={() => dispatch(closeDrawer())}
      onKeyDown={() => dispatch(closeDrawer())}
    >
      <List>
  
        {courseList.map((course, index) => (
          <ListItemButton key={index} sx={{ height: 35 }}>
            <ListItem
              onClick={() => navigateToEnrollments(course.id)}
              sx={{
                height: 35,
              }}
            >
              <Typography>Day {course.order}&nbsp;-&nbsp; </Typography>
              <ListItemText primary={course.title} />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
   
    <Drawer
      anchor={"left"}
      open={isDrawer}
      onClose={() => dispatch(closeDrawer())}
    >
      {courseList.length === 0 ? <Typography  sx={{ width: 300, mt:10 }} textAlign="center">No Curriculum</Typography> : list()}

    </Drawer>
  );
}
