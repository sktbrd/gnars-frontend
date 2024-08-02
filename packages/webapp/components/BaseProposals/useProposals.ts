import { useState, useEffect } from 'react';
import useGraphqlQuery from 'hooks/useGraphqlQuery';
import { SubGraphProposal } from './types';
import { NOUNSBUILD_PROPOSALS_QUERY } from './query';

const subgGraphUrl = "https://api.goldsky.com/api/public/project_clkk1ucdyf6ak38svcatie9tf/subgraphs/nouns-builder-base-mainnet/stable/gn";

export const useProposals = () => {
    const [proposals, setProposals] = useState<SubGraphProposal[]>([]);
    const { data: proposalsData, loading, error } = useGraphqlQuery({
        url: subgGraphUrl,
        query: NOUNSBUILD_PROPOSALS_QUERY,
        variables: {
            where: {
                dao: "0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17",
            },
            first: 50,
        },
    });

    useEffect(() => {
        if (proposalsData) {
            const mappedProposals = proposalsData.proposals.map((proposal: any) => ({
                proposalId: proposal.proposalId,
                title: proposal.title,
                proposer: proposal.proposer,
                status: proposal.executableFrom > Date.now() / 1000 ? "Active" : "Closed",
                description: proposal.description,
                forVotes: proposal.forVotes,
                againstVotes: proposal.againstVotes,
                abstainVotes: proposal.abstainVotes,
                proposalNumber: proposal.proposalNumber,
                quorumVotes: proposal.quorumVotes,
                voteStart: proposal.voteStart,
                voteEnd: proposal.voteEnd,
                expiresAt: proposal.expiresAt,
                snapshotBlockNumber: proposal.snapshotBlockNumber,
                transactionHash: proposal.transactionHash,
                votes: proposal.votes,
            }));
            setProposals(mappedProposals);
        }
    }, [proposalsData]);

    return { proposals, loading, error };
};
