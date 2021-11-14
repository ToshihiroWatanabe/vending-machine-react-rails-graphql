import React from "react";
import { useQuery, gql } from "@apollo/client";

const TEST_FIELD = gql`
  {
    testField
  }
`;

const Demo = (): JSX.Element => {
  const { loading, error, data } = useQuery(TEST_FIELD);

  if (loading) return <>ロード中....</>;
  if (error) return <>Error {error.message}</>;
  return <>{data.testField}</>;
};

export default Demo;
