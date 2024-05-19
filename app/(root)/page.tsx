import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {

  // const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id,
  // });

    const loggedIn = {
      firstName: "Adrian",
      lastName: "Gonzalez",
      email: "adrian.gonzalez",
    };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={"Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        RecentTransactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[123, 321]} />
    </section>
  );
};

export default Home;
