 export const dummyState = {
    users: [
      {
        username: "amyrobson",
        upvoted: [],
        downvoted: []
      },
      {
        username: "maxblagun",
        upvoted: [],
        downvoted: []
      },
      {
        username: "ramsesmiron",
        upvoted: [],
        downvoted: []
      },
      {
        username: "juliusomo",
        upvoted: [],
        downvoted: []
      }
    ],
    currentUser: "juliusomo",
    comments: [
      {
        id: 1,
        content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdOn: "May 02 2022",
        score: 5,
        user: "amyrobson",
        repliers: []
      },
      {
        id: 2,
        content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdOn: "May 16 2022",
        score: 5,
        user: "maxblagun",
        repliers: [
          {
            id: 3,
            content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdOn: "May 23 2022",
            score: 4,
            user: "ramsesmiron",
            replyingTo: "maxblagun"
          },
          {
            id: 4,
            content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdOn: "May 31 2022",
            score: 2,
            user: "juliusomo",
            replyingTo: "ramsesmiron"
          }
        ]
      }
    ],
    newId: 5
  }