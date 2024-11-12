import React from "react";

export default function NotificationDetailedView({ selectedListItem }) {
  // {
  //   id: 12,
  //   type: null,
  //   name: "Accept Payment",
  //   description: "please approve this if you have received the payment",
  //   senderId: "aea53a3d-736c-4917-8ad4-6969e42ef7fe",
  //   sender: {
  //     firstName: "Jane",
  //     lastName: "Mahmud",
  //   },
  //   receiverId: "7ee6cf1a-2f18-4edd-b353-cb77b945c998",
  //   seen: false,
  //   enabled: true,
  //   completed: false,
  //   completedOn: "2024-10-23T21:57:04.087167",
  //   paymentId: 56,
  //   payment: null,
  // }

  const {
    sender: { firstName, lastName },
    completed,
  } = selectedListItem;

  return (
    <div>
      {selectedListItem?.name}
      <div>
        <h3>From {firstName + " " + lastName}</h3>
        {completed ? null : <button>Complete</button>}
      </div>
    </div>
  );
}
