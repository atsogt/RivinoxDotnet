import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsList from "./NotificationsList";
import NotificationAddIcon from "@mui/icons-material/Notifications";
import NotificationDetailedView from "./NotificationDetailedView";

// const not = [
//   {
//     id: 12,
//     type: null,
//     name: "Accept Payment",
//     description: "please approve this if you have received the payment",
//     senderId: "aea53a3d-736c-4917-8ad4-6969e42ef7fe",
//     sender: {
//       firstName: "Jane",
//       lastName: "Mahmud",
//     },
//     receiverId: "7ee6cf1a-2f18-4edd-b353-cb77b945c998",
//     seen: false,
//     enabled: true,
//     completed: false,
//     completedOn: "2024-10-23T21:57:04.087167",
//     paymentId: 56,
//     payment: null,
//   },
//   {
//     id: 61,
//     type: "invoice",
//     name: "Accept Payment",
//     description: "please approve this if you have received the payment",
//     senderId: "622bcb67-7d86-498b-8191-db796ddcac73",
//     sender: {
//       firstName: "Alex",
//       lastName: "Mahmud",
//     },
//     receiverId: "ee640120-b0fa-4c35-8c27-620cebe62880",
//     seen: true,
//     enabled: true,
//     completed: true,
//     completedOn: "2024-10-23T21:57:04.087501",
//     paymentId: 90,
//     payment: null,
//   },
//   {
//     id: 98,
//     type: null,
//     name: "Accept Payment",
//     description: "please approve this if you have received the payment",
//     senderId: "59b8fe48-707d-4858-a2f5-89e87f22b5e6",
//     sender: {
//       firstName: "Alex",
//       lastName: "Mahmud",
//     },
//     receiverId: "aefd026a-a50b-4d49-8aa8-d2be2b9cbe96",
//     seen: true,
//     enabled: true,
//     completed: false,
//     completedOn: "2024-10-23T21:57:04.087601",
//     paymentId: 77,
//     payment: null,
//   },
//   {
//     id: 71,
//     type: "payment",
//     name: "Accept Payment",
//     description: "please approve this if you have received the payment",
//     senderId: "78fb815c-3776-4a63-90af-5cf890581d5a",
//     sender: {
//       firstName: "Alex",
//       lastName: "Mahmud",
//     },
//     receiverId: "471faed7-0529-4028-9cd3-324b5613de63",
//     seen: false,
//     enabled: true,
//     completed: true,
//     completedOn: "2024-10-23T21:57:04.087690",
//     paymentId: 42,
//     payment: null,
//   },
//   {
//     id: 84,
//     type: "invoice",
//     name: "Accept Payment",
//     description: "please approve this if you have received the payment",
//     senderId: "09fed93a-672e-4efd-856e-d678fcf22771",
//     sender: {
//       firstName: "John",
//       lastName: "Mahmud",
//     },
//     receiverId: "ba5d715d-868c-4dad-8a01-9d7086439be6",
//     receiver: null,
//     seen: false,
//     enabled: true,
//     completed: false,
//     completedOn: "2024-10-23T21:57:04.087987",
//     paymentId: 84,
//     payment: null,
//   },
// ];

// const StyledContainer = styled(Container)`
//   border: 1px solid red;
//   maxWidth="sm"
// `;

// const Skeleton = styled("div")(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function MyAction() {
//   return (
//     <>
//       <Grid container>
//         <Grid item md={12}>
//           <Paper>1</Paper>
//         </Grid>
//         <Grid item md={3}>
//           <Paper>2</Paper>
//         </Grid>
//         <Grid item md={3}>
//           <Paper>3</Paper>
//         </Grid>
//         <Grid item md={3}>
//           <Paper>4</Paper>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// const StyledContainer = styled(Container)`
//   border: 1px solid red;
// `;

// const StyledNotification = styled(NotificationAddIcon)`
//   cursor: pointer;
//   color: #007bff;
//   transform: scale(1.1);
// `;

// export default function MyAction() {
//   const [notifications, setNotifications] = useState(not);
//   const [seeNotification, setSeeNotification] = useState(false);
//   const [notificationDashBoard, setNotificationDashboard] = useState(false);

//   const notificationToggle = () => {
//     setSeeNotification((n) => !n);
//     console.log(seeNotification);
//   };
//   const handleViewAll = () => {
//     setSeeNotification(false);
//     setNotificationDashboard((n) => !n);
//   };

//   return (
//     <>
//       {notificationDashBoard ? (
//         <NotificationsList notifications={not} handleViewAll={handleViewAll} />
//       ) : null}
//       <StyledContainer
//         maxWidth="lg"
//         sx={{ display: "flex", justifyContent: "flex-end", mt: 4, mb: 4 }}>
//         <Box>
//           <Badge
//             badgeContent={notifications?.length}
//             sx={{
//               mt: 4,
//               // border: "1px solid pink",
//               margin: "10px",
//             }}>
//             <StyledNotification
//               onClick={notificationToggle}></StyledNotification>
//           </Badge>
//         </Box>
//         <Grid>
//           {seeNotification && (
//             <Container
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 position: "absolute",
//                 top: 100,
//                 right: 10,
//                 zIndex: 1000,
//               }}>
//               <Grid>
//                 <NotificationsList
//                   // navigateToNotification={handleViewNotification}
//                   notifications={notifications}
//                   handleViewAll={handleViewAll}
//                 />
//               </Grid>
//             </Container>
//           )}
//         </Grid>
//       </StyledContainer>
//     </>
//   );
// }

// import { useState } from "react";
// import NotificationsList from "./NotificationsList";
// import { Button } from "@mui/material";
// import Grid from "@mui/material/Button";

// import NotificationDetailedView from "./NotificationDetailedView";

export default function MyAction() {
  const not = [
    {
      id: 12,
      type: null,
      name: "Accept Payment",
      description: "please approve this if you have received the payment",
      senderId: "aea53a3d-736c-4917-8ad4-6969e42ef7fe",
      sender: {
        firstName: "Jane",
        lastName: "Mahmud",
      },
      receiverId: "7ee6cf1a-2f18-4edd-b353-cb77b945c998",
      seen: false,
      enabled: true,
      completed: false,
      completedOn: "2024-10-23T21:57:04.087167",
      paymentId: 56,
      payment: null,
    },
    {
      id: 61,
      type: "invoice",
      name: "Accept Payment",
      description: "please approve this if you have received the payment",
      senderId: "622bcb67-7d86-498b-8191-db796ddcac73",
      sender: {
        firstName: "Alex",
        lastName: "Mahmud",
      },
      receiverId: "ee640120-b0fa-4c35-8c27-620cebe62880",
      seen: true,
      enabled: true,
      completed: true,
      completedOn: "2024-10-23T21:57:04.087501",
      paymentId: 90,
      payment: null,
    },
    {
      id: 98,
      type: null,
      name: "Accept Payment",
      description: "please approve this if you have received the payment",
      senderId: "59b8fe48-707d-4858-a2f5-89e87f22b5e6",
      sender: {
        firstName: "Alex",
        lastName: "Mahmud",
      },
      receiverId: "aefd026a-a50b-4d49-8aa8-d2be2b9cbe96",
      seen: true,
      enabled: true,
      completed: false,
      completedOn: "2024-10-23T21:57:04.087601",
      paymentId: 77,
      payment: null,
    },
    {
      id: 71,
      type: "payment",
      name: "Accept Payment",
      description: "please approve this if you have received the payment",
      senderId: "78fb815c-3776-4a63-90af-5cf890581d5a",
      sender: {
        firstName: "Alex",
        lastName: "Mahmud",
      },
      receiverId: "471faed7-0529-4028-9cd3-324b5613de63",
      seen: false,
      enabled: true,
      completed: true,
      completedOn: "2024-10-23T21:57:04.087690",
      paymentId: 42,
      payment: null,
    },
    {
      id: 84,
      type: "invoice",
      name: "Accept Payment",
      description: "please approve this if you have received the payment",
      senderId: "09fed93a-672e-4efd-856e-d678fcf22771",
      sender: {
        firstName: "John",
        lastName: "Mahmud",
      },
      receiverId: "ba5d715d-868c-4dad-8a01-9d7086439be6",
      receiver: null,
      seen: false,
      enabled: true,
      completed: false,
      completedOn: "2024-10-23T21:57:04.087987",
      paymentId: 84,
      payment: null,
    },
  ];
  const [notifications, setNotifications] = useState(not);
  const [selectedListItem, setSelectedListItem] = useState(null);

  const handleViewNotification = (val) => {
    // make API call to get more data related to the notification Id
    //do logic here
    // console.log(val);
    setSelectedListItem((cur) => (cur?.id === val.id ? null : val));
    // setNotifications((notifications) =>
    //   notifications.map((notification) =>
    //     notification.id === val.id ? { ...notification, seen: true } : null
    //   )
    // );
    console.log(selectedListItem);
  };

  return (
    <div>
      {/* <Button>Open drawer</Button> */}
      <NotificationsList
        navigateToNotification={handleViewNotification}
        notifications={notifications}
      />
      {selectedListItem ? (
        <NotificationDetailedView selectedListItem={selectedListItem} />
      ) : null}
    </div>
  );
}
