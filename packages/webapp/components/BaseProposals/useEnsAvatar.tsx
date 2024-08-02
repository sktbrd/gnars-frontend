import { useEnsName, useEnsAvatar } from 'wagmi';
import { normalize } from 'viem/ens';

function useEnsDetails(address: `0x${string}`) {
    const { data: ensName, isLoading: ensNameLoading } = useEnsName({ address });
    const { data: ensAvatar, isLoading: ensAvatarLoading } = useEnsAvatar({
        name: ensName ? normalize(ensName) : undefined,
    });

    return {
        ensName,
        ensAvatar,
        isLoading: ensNameLoading || ensAvatarLoading,
    };
}

export default useEnsDetails;
