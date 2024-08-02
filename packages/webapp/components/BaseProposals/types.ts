export type SubGraphProposal = {
    proposalId: string;
    title: string;
    proposer: string;
    status: string;
    description: string;
    forVotes: number;
    againstVotes: number;
    proposalNumber: number;
    abstainVotes: number;
    quorumVotes: number;
    expiresAt: number;
    snapshotBlockNumber: number;
    transactionHash: string;
    voteStart: number;
    voteEnd: number;
    votes: {
        voter: string;
        support: boolean;
        weight: number;
        reason: string;
    }[];
};

