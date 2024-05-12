import Binance from "../assets/icons/binance.svg";
import Latoken from "../assets/icons/latoken.svg";
import bscScan from "../assets/icons/bscScan.svg";
import biCrypto from "../assets/icons/biCrypto.svg";
import coinGecko from "../assets/icons/coinGecko.svg";
import coinPaprika from "../assets/icons/coinPaprika.svg";
import coinStats from "../assets/icons/coinStats.svg";
import digitalCoin from "../assets/icons/digitalCoin.svg";
import coinMarketCap from "../assets/icons/coinMarket.svg";
import coinBase from "../assets/icons/coinbase.svg";
import step2 from "../assets/icons/2-icon.svg";
import step1 from "../assets/icons/step1.svg";
import step3 from "../assets/icons/step3.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter2.svg";
import bubbleIcon from "../assets/icons/discord-bubble.svg";
import telegram from "../assets/icons/telegram.svg";
import whatsapp from "../assets/icons/whatspp.svg";
import youtube from "../assets/icons/youtube.svg";
import foxIcon from "../assets/icons/fox-icon.svg";
import laIcon from "../assets/icons/LAicon.svg";
import mIcon from "../assets/icons/m-icon.svg";
import bscScanIcon from "../assets/icons/bscScan-Icon.svg";
import coinGeckoIcon from "../assets/icons/coinGecko-icon.svg";
import shiedIcon from "../assets/icons/shield-icon.svg";

export const HeaderLinks = [
  {
    text: "Farm Now",
    url: "/farm-now",
  },
  {
    text: "Withdrawal",
    url: "/withdrawal",
  },
  {
    text: "Refer & Earn",
    url: "/refer",
  },
  {
    text: "Team Farming",
    url: "/team-farming",
  },
];

export const coinsData = [
  Binance,
  Latoken,
  bscScan,
  biCrypto,
  coinGecko,
  coinPaprika,
  coinStats,
  digitalCoin,
  coinMarketCap,
  coinBase,
];

export const FarmingYieldComponentData = [
  {
    title: "You Earn",
    subtitle: "2X/3X Yield",
    value: "$75",
  },
  {
    title: "Pending",
    subtitle: "Yield",
    value: "$30",
  },
  {
    title: "Your",
    subtitle: "Yield",
    value: "$40",
  },
  {
    title: "Today's",
    subtitle: "Farming",
    value: "$25",
  },
];

export const FarmingYieldComponentData2 = [
  {
    title: "Total",
    subtitle: "Farming",
    value: "$230",
  },
  {
    title: "Total",
    subtitle: "Withdrawal",
    value: "$230",
  },
  {
    title: "Total Active",
    subtitle: "Team",
    value: "230",
  },
];
export const MyFarmingComponentData = [
  {
    title: "Current Farming",
    subtitle: "slot",
    value: "$25",
  },
  {
    title: "Self",
    subtitle: "Yield",
    value: "$ 25 | $ 50",
  },
];
export const DirectFarmersComponentData = [
  {
    title: "Total",
    subtitle: "Yield",
    value: "$ 50 | 90",
  },
  {
    title: "Direct",
    subtitle: "Yield",
    value: "$ 15 | 30",
  },
];
export const directFarmersTableColumns = [
  { header: "Directs", field: "id" },
  { header: "Date", field: "date" },
  { header: "Wallet Address", field: "walletAddress" },
  { header: "Farming Amt($)", field: "farmingAmount" },
  { header: "TKN Rate", field: "tknRate" },
  { header: "Daily yield($)", field: "dailyYield" },
  { header: "Total Yield(TKN)", field: "totalYield" },
  { header: "Farming Pool", field: "totalYieldTkn" },
  { header: "Status", field: "farmingPool" },
];
export const directFarmersTableValues = [
  {
    id: 1,
    date: "17/08/2022",
    walletAddress: "8673xxxx",
    farmingAmount: 175,
    tknRate: 0.4,
    dailyYield: 0.7,
    totalYield: 25,
    totalYieldTkn: 450,
    farmingPool: "Active",
  },
  {
    id: 2,
    date: "15/09/2024",
    walletAddress: "8673xxxx",
    farmingAmount: 175,
    tknRate: 0.4,
    dailyYield: 0.7,
    totalYield: 25,
    totalYieldTkn: 450,
    farmingPool: "Active",
  },
  {
    id: 3,
    date: "11/08/2022",
    walletAddress: "8673xxxx",
    farmingAmount: 175,
    tknRate: 0.4,
    dailyYield: 0.7,
    totalYield: 25,
    totalYieldTkn: 450,
    farmingPool: "Inactive",
  },
  {
    id: 4,
    date: "07/08/2022",
    walletAddress: "8673xxxx",
    farmingAmount: 175,
    tknRate: 0.4,
    dailyYield: 0.7,
    totalYield: 25,
    totalYieldTkn: 450,
    farmingPool: "Active",
  },
  {
    id: 5,
    date: "15/08/2022",
    walletAddress: "8673xxxx",
    farmingAmount: 175,
    tknRate: 0.4,
    dailyYield: 0.7,
    totalYield: 25,
    totalYieldTkn: 450,
    farmingPool: "Active",
  },
];

export const MyFarmingTableColumns = [
  { header: "SR.NO", field: "id" },
  { header: "Date", field: "date" },
  { header: "Farming Amt($)", field: "farmingAmount" },
  { header: "Daily yield($)", field: "dailyYield" },
  { header: "Total Yield($)", field: "totalYield" },
  { header: "Total yield(TKN)", field: "totalYieldTkn" },
];
export const MyFarmingTableValues = [
  {
    id: 1,
    date: "14/10/2024",
    farmingAmount: 575,
    dailyYield: 0.75,
    totalYield: 25,
    totalYieldTkn: 30,
  },
  {
    id: 2,
    date: "15/08/2022",
    farmingAmount: 220,
    dailyYield: 0.3,
    totalYield: 44,
    totalYieldTkn: 45,
  },
  {
    id: 3,
    date: "01/01/2023",
    farmingAmount: 500,
    dailyYield: 0.7,
    totalYield: 33,
    totalYieldTkn: 40,
  },
  {
    id: 4,
    date: "17/10/2021",
    farmingAmount: 175,
    dailyYield: 0.1,
    totalYield: 25,
    totalYieldTkn: 55,
  },
  {
    id: 5,
    date: "07/03/2020",
    farmingAmount: 175,
    dailyYield: 0.8,
    totalYield: 25,
    totalYieldTkn: 10,
  },
];
export const ReferSteps = [
  {
    icon: step1,
    step: "step1",
    subtext: "Share your referral link with friends",
  },
  {
    icon: step2,
    step: "step2",
    subtext:
      "Invite friends to sign up and accumulatively deposit more than $50",
  },
  {
    icon: step3,
    step: "step3",
    subtext: "Receive 100 USDT trading fee rebate voucher each",
  },
];
export const Rules = [
  "Share your Lite Referral ID / link with a friend who does not have a Binance account.",
  "Regular Task: Referees must accumulatively deposit more than $50 within 14 days of registration. Both referrer and referee will be rewarded with a 100 USDT trading fee rebate voucher each.",
  "Disclaimer: You can only claim one reward per referral. For example, you will not be eligible for Standard Referral rewards if friends sign up using your [Lite Referral Mode] ID / link.",
];

export const MediaIcons = [twitter, telegram, facebook, whatsapp, bubbleIcon];
export const MediaIcons1Footer = [
  twitter,
  telegram,
  youtube,
  facebook,
  whatsapp,
];
export const MediaIcons2Footer = [
  bscScanIcon,
  mIcon,
  coinGeckoIcon,
  laIcon,
  foxIcon,
  shiedIcon,
];

export const ReferalData = [
  {
    text: "Lite Referral ID",
    link: "CPA_009YZ3G6Z6",
  },
  {
    text: "Lite Referral Link ",
    link: "https://ww...Z3G6Z6",
  },
];

export const ClaimedHistoryTableCloumns = [
  { header: "SR.No", field: "id" },
  { header: "Date", field: "date" },
  { header: "Claimed Amt (T)", field: "ClaimedAmount" },
  { header: "Slippage", field: "Slippage" },
  { header: "Recieved Amt(T)", field: "RecievedAmount" },
  { header: "TX Hash", field: "TXHash" },
  { header: "Status", field: "Status" },
];
export const ClaimedHistoryTableValues = [
  {
    id: 1,
    date: "17/08/2022",
    ClaimedAmount: "$10",
    Slippage: 100,
    RecievedAmount: 100,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
  {
    id: 2,
    date: "20/08/2022",
    ClaimedAmount: "$50",
    Slippage: 100,
    RecievedAmount: 150,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
  {
    id: 3,
    date: "25/10/2022",
    ClaimedAmount: "$70",
    Slippage: 100,
    RecievedAmount: 570,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
  {
    id: 4,
    date: "01/08/2022",
    ClaimedAmount: "$10",
    Slippage: 100,
    RecievedAmount: 180,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
  {
    id: 5,
    date: "17/08/2022",
    ClaimedAmount: "$10",
    Slippage: 100,
    RecievedAmount: 200,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
  {
    id: 6,
    date: "17/08/2022",
    ClaimedAmount: "$20",
    Slippage: 100,
    RecievedAmount: 100,
    TXHash: "XXXXXXXXXX",
    Status: "Successful",
  },
];
