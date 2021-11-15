import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

// const TEST_FIELD = gql`
//   {
//     itemStocks{
//       id
//       quantity
//     }
//     moneyStock{
//       deposit
//     }
//     products{
//       id
//       name
//     }
//     salesHistories{
//       id
//       purchaseTime
//     }
//     temperatures{
//       id
//       name
//     }
//     vendors{
//       id
//       name
//     }
//   }
// `;

const TEST_FIELD = gql`
  {
    joinedItemStocks{
      id
      name
      temperature
      price
      quantity
    }
    moneyStock{
      deposit
    }
  }
`;

const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(TEST_FIELD);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <h1>自動販売機シミュレーター</h1>
      {loading && (<>ロード中....</>)}
      {error && (<>Error {error.message}</>)}
      投入金額: {data && data.moneyStock.deposit}円
    </>
  )
};

export default Home;
