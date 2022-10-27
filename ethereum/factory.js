import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1498700dDA8b7C79CC365EE6067Df7cf7C51EC17"
);


export default instance;