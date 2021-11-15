import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const TEST_FIELD = gql`
  {
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
