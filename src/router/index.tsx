import { Routes, Route, Link } from "react-router-dom";


import App from "../App";
import UpdateState from '@page/updateState';
import ReactComponent from '@page/reactComponent';

function AppRoutes () {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/updateState" element={<UpdateState />} />
        <Route path="/reactComponent" element={<ReactComponent />} />
      </Routes>
    </>
  );
}

export default AppRoutes;

// const routes = [
//   {
//     element: <App />,
//     path: "/",
//     children: [
//       {
//         index: true,
//         // element: <Home />,
//       },
//       {
//         path: "/updateState",
//         element: <UpdateState />,
//         // children: [
//         //   {
//         //     index: true,
//         //     element: <LeagueStandings />,
//         //   },
//         //   {
//         //     path: ":teamId",
//         //     element: <Team />,
//         //   },
//         //   {
//         //     path: ":teamId/edit",
//         //     element: <EditTeam />,
//         //   },
//         //   {
//         //     path: "new",
//         //     element: <NewTeamForm />,
//         //     params: {
//         //       teamId: "firebirds"
//         //     },
//         //   },
//         // ],
//       },
//     ]
//   }
// ];

// export default routes;
