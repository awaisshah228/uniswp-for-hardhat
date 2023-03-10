import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ethers } from 'hardhat';


interface Custom extends HardhatRuntimeEnvironment {
  [prop:string]:any;
  
}


const func: DeployFunction = async function (hre: Custom) {

    const signers = await ethers.getSigners();

    const {getNamedAccounts , deployments, network } = hre
    const { deploy, run } = deployments
    const { deployer } = await getNamedAccounts()


    //  await deploy("CustomToken", {
    //     from: deployer,
    //     args: ["Awais","Aw",100000],
    //     log: true, 
    //   })



    //
    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  
    // const lockedAmount = ethers.utils.parseEther("1");
  
       console.log(deployer)
    await deploy("UniswapV2Factory", {
        from: deployer,
        args: [deployer],
        log: true,
        // value: lockedAmount 
      })
  // code here
};
export default func;