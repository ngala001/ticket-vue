import { gql } from '@apollo/client/core';


export const GET_TEAMS =gql`
  query {
    teams {
        id
        name
        logo
        stadiumId
    }
  }
`;





