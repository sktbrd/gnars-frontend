'use client'
import React from "react";
import ProposalItem from "./ProposalItem";
import { SubGraphProposal } from "./types";

type ProposalListProps = {
    proposals: SubGraphProposal[];
    onProposalClick: (proposal: SubGraphProposal) => void;
};

const ProposalList: React.FC<ProposalListProps> = ({ proposals, onProposalClick }) => {
    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {proposals.map((proposal) => (
                <ProposalItem
                    key={proposal.proposalId}
                    proposal={proposal}
                    onClick={() => onProposalClick(proposal)}
                />
            ))}
        </ul>
    );
};

export default ProposalList;
