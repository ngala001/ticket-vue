import { gql } from '@apollo/client/core';


export const GET_TEAMS =gql`
  query get_teams {
    teams {
        id
        name
        logo
        stadiumId
    }
  }
`;





