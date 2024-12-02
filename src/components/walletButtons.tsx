'use client'

import { client } from "@/app/client"
import { Wallet } from "lucide-react"
import { useTheme } from "next-themes"
import { sepolia } from "thirdweb/chains"
import { ConnectButton, darkTheme, useActiveAccount, useWalletDetailsModal, UseWalletDetailsModalOptions } from "thirdweb/react"

const WalletButtons = () => {
    const account = useActiveAccount()
    const { theme } = useTheme()

    const detailsModal = useWalletDetailsModal();
 
    function handleClick() {
        detailsModal.open({ client, theme: theme as "light" | "dark", chains: [sepolia], displayBalanceToken: {
            [sepolia.id]: "0x036F90967A41e436e266C60e64789EB3844b80DB"
        } });
    }

    return (
        <div>
            {!account ? (
                <ConnectButton
                    client={client}
                    chain={sepolia}
                    appMetadata={{
                        name: "Artoks",
                        url: "https://artoks.one",
                    }}
                    connectModal={{
                        size: "wide",
                        title: "Login",
                    }}
                    theme={
                        darkTheme({
                            colors: {
                            primaryButtonBg: "#3779D1",
                            primaryButtonText: "#fff",
                            },
                        })
                    }
                    connectButton={{
                        style: {
                            height: "35px",
                            fontSize: "16px",
                        },
                    }}
                    accountAbstraction={{
                        chain: sepolia,
                        sponsorGas: true,
                    }}
                    detailsButton={{
                        displayBalanceToken: {
                            [sepolia.id]: "0x036F90967A41e436e266C60e64789EB3844b80DB"
                        },
                    }}
                />
            ) : (
                <button onClick={handleClick} className="flex">
                    <Wallet />
                </button>
            )}
        </div>
    )
}

export default WalletButtons