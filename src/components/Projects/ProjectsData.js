// language icon images
import reactIcon from "../../assets/languages/react.png";
// import cssIcon from "../../assets/languages/css.png";
import firebaseIcon from "../../assets/languages/firebase.png";
// import javascriptIcon from "../../assets/languages/javascript.png";
import typescriptIcon from "../../assets/languages/typescript.png";
// import tailwindIcon from "../../assets/languages/tailwind.png";
import sqlIcon from "../../assets/languages/sql.png";
import sassIcon from "../../assets/languages/sass.png";
import nodeIcon from "../../assets/languages/node.png";
import expressIcon from "../../assets/languages/node.png";
import mongodbIcon from "../../assets/languages/mongodb.PNG";
import awsIcon from "../../assets/languages/aws.png";
import herokuIcon from "../../assets/languages/heroku.png";
import jwtIcon from "../../assets/languages/jwt.png";
import reduxIcon from "../../assets/languages/redux.png";

// nodebook Project images
import nodebookFavicon from "../../assets/projects/node/nodebook/nodebook-favicon.png";
import nodebookImg5 from "../../assets/projects/node/nodebook/nodebook-5.png";
import nodebookImg6 from "../../assets/projects/node/nodebook/nodebook-6.png";
import nodebookImg7 from "../../assets/projects/node/nodebook/nodebook-7.PNG";
import nodebookImg8 from "../../assets/projects/node/nodebook/nodebook-8.PNG";
// applify Project images
import applifyFavicon from "../../assets/projects/node/applify/applify-favicon.png";
import applifyImg1 from "../../assets/projects/node/applify/applify-1.png";
import applifyImg2 from "../../assets/projects/node/applify/applify-2.png";
import applifyImg3 from "../../assets/projects/node/applify/applify-3.png";
import applifyImg4 from "../../assets/projects/node/applify/applify-4.png";
// PEFFL project images
import pefflFavicon from "../../assets/projects/node/peffl/peffl-favicon.png";
import pefflImg1 from "../../assets/projects/node/peffl/peffl-1.PNG";
import pefflImg2 from "../../assets/projects/node/peffl/peffl-2.PNG";
import pefflImg3 from "../../assets/projects/node/peffl/peffl-3.PNG";
import pefflImg4 from "../../assets/projects/node/peffl/peffl-4.PNG";

// CalcHouse project images
import calcHouseFavicon from "../../assets/projects/react/calcHouse/calcHouse-favicon.png";
import calcHouseImg1 from "../../assets/projects/react/calcHouse/calcHouse-1.png";
import calcHouseImg2 from "../../assets/projects/react/calcHouse/calcHouse-2.png";
import calcHouseImg3 from "../../assets/projects/react/calcHouse/calcHouse-3.png";
import calcHouseImg4 from "../../assets/projects/react/calcHouse/calcHouse-4.png";
import calcHouseImg5 from "../../assets/projects/react/calcHouse/calcHouse-5.png";

// Petstagram project images
// import petstagramFavicon from "../../assets/projects/react/petstagram/petstagram-favicon.png";
// import petstagramImg1 from "../../assets/projects/react/petstagram/petstagram-1.PNG";
// import petstagramImg2 from "../../assets/projects/react/petstagram/petstagram-2.png";
// import petstagramImg3 from "../../assets/projects/react/petstagram/petstagram-3.PNG";
// import petstagramImg4 from "../../assets/projects/react/petstagram/petstagram-4.PNG";

// Game & Seek project images
// import gameNseekFavicon from "../../assets/projects/games/gameNseek/gameNseek-favicon.png";
// import gameNseekImg1 from "../../assets/projects/games/gameNseek/gameNseek-1.PNG";
// import gameNseekImg2 from "../../assets/projects/games/gameNseek/gameNseek-2.png";
// import gameNseekImg3 from "../../assets/projects/games/gameNseek/gameNseek-3.png";
// import gameNseekImg4 from "../../assets/projects/games/gameNseek/gameNseek-4.PNG";

export const nodebookProjectData = {
  id: "1",
  icons: [
    { icon: mongodbIcon, color: "mongo" },
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: nodeIcon, color: "node" },
    { icon: sassIcon, color: "sass" },
    { icon: awsIcon, color: "aws" },
    { icon: herokuIcon, color: "heroku" },
    { icon: reactIcon, color: "styled components" },
  ],
  title: "Nodebook",
  preview:
    "A fully functional and responsive social media app built with MongoDB, Express, React, NodeJS, and more.",
  desc: "A social media app built with MongoDB, Express, React, NodeJS, and more. This is a fully functional and responsive app that allows users to create an account, post messages, photos, edit & delete posts, comment, like/unlike, follow/unfollow, change their avatar and much more!",
  favicon: nodebookFavicon,
  imgs: [
    { src: nodebookImg6 },
    { src: nodebookImg7 },
    { src: nodebookImg8 },
    { src: nodebookImg5 },
  ],
  repository: "https://github.com/KFig21/nodebook_client",
  live: "https://kfig21.github.io/nodebook_client/",
};

export const applifyProjectData = {
  id: "2",
  icons: [
    { icon: mongodbIcon, color: "mongo" },
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: nodeIcon, color: "node" },
    { icon: reduxIcon, color: "redux" },
    { icon: sassIcon, color: "sass" },
    { icon: jwtIcon, color: "jwt" },
    { icon: herokuIcon, color: "heroku" },
    { icon: reactIcon, color: "styled components" },
  ],
  title: "Applify",
  preview:
    "While on my job search I decided to build a web app that would assist me in the process. Applify is built with the MERN stack, JWT authentication and more.",
  desc: "While on my job search I decided to build a web app that would assist me in the process. Applify is built with the MERN stack, React sticky-tables, styled components, and JWT authentication. The goal of this project is to help simplify and streamline the job search process by allowing users to track their applications and store their credentials in easily accessible quick-links.",
  favicon: applifyFavicon,
  imgs: [
    { src: applifyImg1 },
    { src: applifyImg2 },
    { src: applifyImg3 },
    { src: applifyImg4 },
  ],
  repository: "https://github.com/KFig21/applify_client",
  live: "https://kfig21.github.io/applify_client/#/",
};

export const petstagramProjectData = {
  id: "3",
  icons: [
    { icon: mongodbIcon, color: "mongo" },
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: nodeIcon, color: "node" },
    { icon: reduxIcon, color: "redux" },
    { icon: sqlIcon, color: "sql" },
    { icon: sassIcon, color: "sass" },
    { icon: awsIcon, color: "aws" },
    { icon: jwtIcon, color: "jwt" },
    { icon: reactIcon, color: "styled components" },
    { icon: herokuIcon, color: "heroku" },
  ],
  title: "PEFFL",
  preview:
    "A comprehensive statistical archive for my fantasy football league. Built with the MERN stack, Redux, SQL and more.",
  desc: "A comprehensive statistical archive for my fantasy football league. This project was built with the MERN stack, Redux, SQL and more. AWS RDS is used as an SQL database solution for the stats while mongodb is used for authentication. Members can customize their appearance and display theme with styled components.",
  favicon: pefflFavicon,
  imgs: [
    { src: pefflImg1 },
    { src: pefflImg2 },
    { src: pefflImg3 },
    { src: pefflImg4 },
  ],
  repository: "https://github.com/KFig21/PEFFL_archive",
  live: "https://kfig21.github.io/PEFFL_archive/#/",
};

export const calcHouseProjectData = {
  id: "4",
  icons: [
    { icon: reactIcon, color: "react" },
    { icon: typescriptIcon, color: "typescript" },
    { icon: sassIcon, color: "sass" },
  ],
  title: "CalcHouse",
  preview:
    "A house purchasing budget and mortgage calculator in one. This project was built with React, TypeScript, Recharts, & SASS.",
  desc: "CalcHouse is both a house purchasing budget and mortgage calculator in one. Set the inputs to accurately determine what house price you can afford and how much it will actually cost by the end of the loan term. Set the calculation to 'mortgage' to find out exactly what your monthly payments will be and how the amortization schedule is broken down.",
  favicon: calcHouseFavicon,
  imgs: [
    { src: calcHouseImg1 },
    { src: calcHouseImg2 },
    { src: calcHouseImg3 },
    { src: calcHouseImg4 },
    { src: calcHouseImg5 },
  ],
  repository: "https://github.com/KFig21/house_calc",
  live: "https://kfig21.github.io/house_calc/",
};

// export const petstagramProjectData = {
//   id: "3",
//   icons: [
//     { icon: reactIcon, color: "react" },
//     { icon: tailwindIcon, color: "tailwind" },
//     { icon: firebaseIcon, color: "firebase" },
//   ],
//   title: "Petstagram",
//   preview:
//     "A fully functional and responsive Instagram re-creation built with React, Tailwind CSS, and Firebase.",
//   desc: "An Instagram re-creation built with React, Tailwind CSS, and Firebase. This is a fully functional and responsive app that allows users to create an account, post & crop photos, delete posts, comment, like/unlike, follow/unfollow, and change their avatar.",
//   favicon: petstagramFavicon,
//   imgs: [
//     { src: petstagramImg1 },
//     { src: petstagramImg2 },
//     { src: petstagramImg3 },
//     { src: petstagramImg4 },
//   ],
//   repository: "https://github.com/KFig21/petstagram",
//   live: "https://kfig21.github.io/petstagram/",
// };

// export const gameNseekProjectData = {
//   id: "4",
//   icons: [
//     { icon: reactIcon, color: "react" },
//     { icon: firebaseIcon, color: "firebase" },
//     { icon: cssIcon, color: "css" },
//   ],
//   title: "Game & Seek",
//   preview:
//     "A 'Where's Waldo' character finding game with 8 unique levels. This project was built with React and uses Firebase for a backend database.",
//   desc: "A 'Where's Waldo' character finding game, this project was built with React and uses Firebase for a backend database. The game features 8 unique levels and a global leaderboard that updates in realtime. Explicit user names submitted to the leaderboard are censored with emojis.",
//   favicon: gameNseekFavicon,
//   imgs: [
//     { src: gameNseekImg1 },
//     { src: gameNseekImg2 },
//     { src: gameNseekImg3 },
//     { src: gameNseekImg4 },
//   ],
//   repository: "https://github.com/KFig21/photo_tagging_app",
//   live: "https://kfig21.github.io/photo_tagging_app/",
// };
