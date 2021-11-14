import React from "react";
import { useQuery, gql } from "@apollo/client";

const TEST_FIELD = gql`
  {
    testField
  }
`;

const Demo = (): JSX.Element => {
  const { loading, error, data } = useQuery(TEST_FIELD);

  return <>
  {loading && (<>ロード中....</>)}
  {error && (<>Error {error.message}</>)}
  {data && data.testField}</>;
};

export default Demo;
