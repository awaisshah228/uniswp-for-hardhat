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

    const UniswapV2Factory = await ethers.getContract('UniswapV2Factory');

     const Weth=await deploy("Weth", {
        from: deployer,
        args: [],
        log: true, 
      })
      // console.log(Weth.address,UniswapV2Factory.address,'hjhkh')



    //
    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  
    // const lockedAmount = ethers.utils.parseEther("1");
  
    await deploy("UniswapV2Router", {
        from: deployer,
        args: [UniswapV2Factory.address,Weth.address],
        log: true,
        // value: lockedAmount 
      })
  // code here
};
export default func;