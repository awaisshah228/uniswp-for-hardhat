/* tslint:disable */
/* eslint-disable */

import { expect } from "chai";
import { ethers } from "hardhat";
import {Contract} from "ethers";

// type SignerWithAddress = Awaited<ReturnType<typeof ethers["getSigner"]>>;


// test suite
describe("Test uniswap", function () {
    let factory: any;
    let weth
    let router: any;
    let cross: any;

   


    this.beforeAll(async  () => {


      
        const [owner, otherAccount] = await ethers.getSigners();

        const Factory = await ethers.getContractFactory("UniswapV2Factory");
         factory = await Factory.deploy(owner.address);

         const Weth = await ethers.getContractFactory("Weth");
         weth = await Weth.deploy();
         const Router = await ethers.getContractFactory("UniswapV2Router");
         router = await Router.deploy(factory.address,weth.address);

         const Cross = await ethers.getContractFactory("CrossChainSwapBot");
         cross = await Cross.deploy(router.address);

        // console.log(factory,"fkadfjdflajsl")

        // set validator for vote
     

    });


    // test case
    it("uniswap factory  deployed",async function() {
      expect(factory.address).not.to.be.null;
      
    });
    it("uniswap router deployed",async function() {
      expect(router.address).not.to.be.null;
      
    });
    it("custin tokne router deployed",async function() {
      expect(cross.address).not.to.be.null;
      
    });



    // it("create proposal", async function () {
    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }

    //     expect(
    //         await proposal.getLatestProposalId(validator.address),
    //         "proposal id should the same"
    //     ).to.equal(proposalID);

    // });

    // it("get the latest proposal id", async function () {
    //     let proposalID1 = "";
    //     let proposalID2 = "";
    //     let proposalReceipt1 = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt1.events != undefined) {
    //         // console.log(proposalReceipt1.events[0].args)
    //         if (proposalReceipt1.events[0].args != undefined) {
    //             proposalID1 = proposalReceipt1.events[0].args.id
    //             // console.log(proposalReceipt1.events[0].args.id);
    //         }
    //     }

    //     let proposalReceipt2 = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt2.events != undefined) {
    //         // console.log(proposalReceipt2.events[0].args)
    //         if (proposalReceipt2.events[0].args != undefined) {
    //             proposalID2 = proposalReceipt2.events[0].args.id
    //             // console.log(proposalReceipt2.events[0].args.id);
    //         }
    //     }

    //     await expect(
    //         await proposal.getLatestProposalId(validator.address),
    //         "get latest proposal id"
    //     ).to.not.equal(proposalID1);

    //     await expect(
    //         await proposal.getLatestProposalId(validator.address),
    //         "get latest proposal id"
    //     ).to.equal(proposalID2);
    //     });


    // it("vote for proposal: pass", async function () {

    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }
    //     await proposal.connect(val1).voteProposal(proposalID, true);
    //     await proposal.connect(val2).voteProposal(proposalID, true);
    //     await proposal.connect(val3).voteProposal(proposalID, true);

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.true;

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.not.false;
    // });

    // it("vote for proposal: pass", async function () {

    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }
    //     await proposal.connect(val1).voteProposal(proposalID, true);
    //     await proposal.connect(val2).voteProposal(proposalID, true);
    //     await proposal.connect(val3).voteProposal(proposalID, false);

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.true;

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.not.false;
    // });

    // it("vote for proposal: reject", async function () {

    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }
    //     await proposal.connect(val1).voteProposal(proposalID, false);
    //     await proposal.connect(val2).voteProposal(proposalID, false);
    //     await proposal.connect(val3).voteProposal(proposalID, true);

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.false;

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.not.true;
    // });

    // it("vote for proposal: reject", async function () {

    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }
    //     await proposal.connect(val1).voteProposal(proposalID, false);
    //     await proposal.connect(val2).voteProposal(proposalID, true);

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.false;

    //     await expect(await proposal.isProposalPassed(validator.address, proposalID),
    //         "vote for pass"
    //     ).is.not.true;
    // });

    // it("vote a proposal twice", async function () {

    //     let proposalID = "";
    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }
    //     await proposal.connect(val1).voteProposal(proposalID, true);


    //     await expect(proposal.connect(val1).voteProposal(proposalID, true),
    //         "vote a proposal only once"
    //     ).to.be.reverted;

    //     await expect(proposal.connect(val1).voteProposal(proposalID, false),
    //         "vote a proposal only once"
    //     ).to.be.reverted;
    // });

    // it("set a proposal unpassed", async function () {
    //     const proposalFactory = await ethers.getContractFactory("Proposal", owner);
    //     proposal = await proposalFactory.deploy();

    //     await proposal.initialize(
    //         admin.address,
    //         owner.address,
    //         punishContract.address,
    //         proposal.address,
    //         reservePoolContract.address,100);

    //     let proposalID = "";

    //     let proposalReceipt = await (await proposal.connect(admin).createProposal(validator.address, "create a proposal for validator")).wait();
    //     if (proposalReceipt.events != undefined) {
    //         // console.log(proposalReceipt.events[0].args)
    //         if (proposalReceipt.events[0].args != undefined) {
    //             proposalID = proposalReceipt.events[0].args.id
    //             // console.log(proposalReceipt.events[0].args.id);
    //         }
    //     }

    //     // console.log(await proposal.VALIDATOR_CONTRACT());
    //     // console.log(validatorMockContract.address);
    //     // console.log(owner.address);
    //     // console.log(await validatorMockContract.signer.getAddress());

    //     await expect(proposal.connect(owner).setUnpassed(validator.address, proposalID),
    //         "reject a proposal",
    //     ).to.not.reverted;

    // });


}); // end of describe