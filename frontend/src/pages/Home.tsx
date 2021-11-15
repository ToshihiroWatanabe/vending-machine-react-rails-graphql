import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Stock } from "types/Stock";
import { MONEY_TYPES } from "utils/constants";

/** GraphQLクエリ */
const FETCH_QUERY = gql`
  {
    joinedItemStocks {
      id
      name
      temperature
      price
      quantity
    }
    moneyStock {
      deposit
    }
  }
`;

/**
 * ホーム画面のコンポーネントです。
 */
const Home = (): JSX.Element => {
  const { loading, error, data } = useQuery(FETCH_QUERY);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onPurchaseButtonClick = (id: number) => {};

  const onInsertButtonClick = (moneyType: number) => {};

  const onReleaseButtonClick = () => {};

  return (
    <>
      <h1>自動販売機シミュレーター</h1>
      {loading && <>ロード中....</>}
      {error && <>Error {error.message}</>}
      {data &&
        data.joinedItemStocks.map((stock: Stock) => {
          return (
            <button
              key={stock.id}
              onClick={() => {
                onPurchaseButtonClick(stock.id);
              }}
            >
              {stock.name}
              <br />
              {stock.temperature}
              <br />
              {stock.quantity > 0 ? stock.price + "円" : "売り切れ"}
            </button>
          );
        })}
      <p>投入金額: {data && data.moneyStock.deposit}円</p>
      <div>
        {MONEY_TYPES.map((moneyType: number) => {
          return (
            <button
              key={moneyType}
              onClick={() => {
                onInsertButtonClick(moneyType);
              }}
            >
              {moneyType}円{moneyType >= 1000 ? "札" : "玉"}を入れる
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          onReleaseButtonClick();
        }}
      >
        おつり・返却
      </button>
    </>
  );
};

export default Home;
