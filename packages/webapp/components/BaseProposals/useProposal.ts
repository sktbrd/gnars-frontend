import { useMemo } from 'react';
import { SubGraphProposal } from './types';
import { useProposals } from './useProposals';
export const useProposal = (proposalNumber: string | null) => {
    const { proposals } = useProposals();

    const proposal = useMemo(() => {
        return proposals.find(p => p.proposalNumber === (proposalNumber ? parseInt(proposalNumber, 10) : null)) || null;
    }, [proposals, proposalNumber]);

    return proposal;
};
