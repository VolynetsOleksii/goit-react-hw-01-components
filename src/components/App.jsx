import Profile from "./Profile/Profile";
import user from './Profile/user.json';
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"
import { GlobalStyle } from "./GlobalStyle";
export const App = () => {
  return (
    <div>
     <Profile 
     avatar={user.avatar}
     username={user.username}
     tag={user.tag}
     location={user.location}
     stats={user.stats}
     />
     <Statistics
     title={"Upload stats"}
     stats={data}
     />
     <FriendList friends={friends}/>
     <TransactionHistory items={transactions} />
     <GlobalStyle/>
    </div>
  );
};
