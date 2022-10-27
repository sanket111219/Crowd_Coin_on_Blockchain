const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
// const { interface, bytecode } = require("./compile");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "slogan egg stem electric symbol slight adjust narrow adapt try vote salmon",
  "https://goerli.infura.io/v3/9e8ff13dea724552802007a31488eb75"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  //   console.log(interface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
