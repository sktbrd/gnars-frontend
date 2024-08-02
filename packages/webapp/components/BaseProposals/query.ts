export const NOUNSBUILD_PROPOSALS_QUERY = `
query proposals(
  $where: Proposal_filter,
  $first: Int! = 100,
  $skip: Int = 0
) {
  proposals(
    where: $where
    first: $first
    skip: $skip
    orderBy: timeCreated
    orderDirection: desc
  ) {
    ...Proposal
    votes {
      ...ProposalVote
    }
  }
}

fragment Proposal on Proposal {
  abstainVotes
  againstVotes
  calldatas
  description
  descriptionHash
  executableFrom
  expiresAt
  forVotes
  proposalId
  proposalNumber
  proposalThreshold
  proposer
  quorumVotes
  targets
  timeCreated
  title
  values
  voteEnd
  voteStart
  snapshotBlockNumber
  transactionHash
  dao {
    governorAddress
    tokenAddress
  }
}

fragment ProposalVote on ProposalVote {
  voter
  support
  weight
  reason
}
`;
export const NOUNSBUILD_PROPOSAL_QUERY = `
  query Proposal($where: ProposalWhereInput) {
    proposals(where: $where) {
      proposalId
      title
      proposer
      status
      description
      forVotes
      againstVotes
      abstainVotes
      proposalNumber
      quorumVotes
      expiresAt
      snapshotBlockNumber
      transactionHash
      votes {
        voter
        support
        weight
        reason
      }
    }
  }
`;
