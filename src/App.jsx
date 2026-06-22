import "./App.css";

import user from "./user.json";
import { Profile } from "./Components/Profile/Profile";

import statisticsData from "./statistics.json";
import { Statistics } from "./Components/Statistics/Statistics";

import friendsData from "./friends.json";
import { Friends } from "./Components/Friends/Friends";

import transaction from "./transactions.json";
import { TransactionHistory } from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticsData}
      />
      <Statistics stats={statisticsData} />
      <Friends friends={friendsData} />
      <TransactionHistory items={transaction}/>
    </>
  );
}

export default App;
