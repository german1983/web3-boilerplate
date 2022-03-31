import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { FC, useContext } from "react";
import { transactor } from 'eth-components/functions';

import { useGasPrice } from "eth-hooks";
import { EthComponentsSettingsContext } from "eth-components/models";
import { useEthersContext } from "eth-hooks/context";

export interface IGreeterProps {
  mainnetProvider: StaticJsonRpcProvider | undefined;
  blockExplorer: string;
}

export const Greeter: FC<IGreeterProps> = (props: IGreeterProps) => {
  const ethersContext = useEthersContext();

  const ethComponentsSettings = useContext(EthComponentsSettingsContext);
  const [gasPrice] = useGasPrice(ethersContext.chainId, 'fast');
  const tx = transactor(ethComponentsSettings, ethersContext?.signer, gasPrice);

  return (
    <div>
      {/*
        ⚙️ This is an empty UI with the bare minimum to initiate a transaction using the tx object
      */}
      <div>Here you have something</div>
    </div>
  )
}
