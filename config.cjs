// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VU2Y6jSBD8lVW92hpzH5ZaWozBt41PbK/2oQwFFGd1Udjgkf99hbt7ZqSZne3lqagjMyIyMr+CvMAlmqEG9L8CQvEVMtQuWUMQ6INBFQSIgi7wIYOgD/DKCk6VIzvRrFfrp8Ksy5Rky00lnNFmFuw1bbYn+wup9tYLeHQBqS4p9n4TMKfhLR4KVZ1G180s5VNKREzGW7ks1sSYx/SGRC6f7qHrvYBHGxFiivPQIhHKEIXpDDUOxPRz8JslF9z2r+7kLu52kTWBmlSJt53iaIl8MchZVsJxDzVyvOc+B396lc+7pOwsglc54HWFSDN9mNdHgi47zsvVxSLYxwdHG6ThG/wShznyJz7KGWbNp3VfrXwnvGnjUHHni52QDvy7EWZ8R7kUKVOcZTYj7qQcVfYh/Bxw2/Psy219O1LPY9u7D4c3qbm6TTNao2ADmR9PgmPSoYP69iNwh354Jfk/uhvzVXrW7N7pKk2qvRebarGJrcnR7myzqNPYFpJW+X2EVpb3Ofju6OQKTXVQIkMMUn+bzebilR7PalzM1fjclOFxKF3HfpYk3+FDVtHfoazQxjBgfej05kPXTT2YZN6g4+dezteOevGq1Th0p5vTQbqx6dFdR5fYjrgzWp6z+VxUG4IXQcNvq+WO221foag1MIrDlyejBDUTH/T5RxdQFOKSUchwkT/3RL4LoH/dIo8i9pQXnFbWfWW/LkwfBuoU8/bMbU60MIqFzUmH5qRsJ1fFCq5+YryALiC08FBZIn+MS1bQZoHKEoaoBP2/npVqSVOUFQxNsQ/6QJAlVed4RdIU7s/yyy2CrISEfMkRA10Q0CJbINBntEJd8HwgG6Yg8xYn2cMhp1mWIhiizcm2NTAF2RQHLcXsLekOZ6hkMCOgz6uyoPGyqqiPv7sgRzV780/LuiUdYFqyfV6RtID+h7k+DqHnFVXOtk3ume0CUdDnvm8jxnAeli2zKofUi/AVmS0P0A9gWqJvQiOK/A8u78PDLPy2/rYqbZWpswIt9jbQT9r0Jf1neXLY3gYrd/nHYLXdgi5Inw95ntN1WZREXlN1XW3ftgePb5jbFD5iEKcl6APToRp2pIHldG6ythiNDCs0zNAA3zl+ePbNE8iRzklzFzf5cVzrryg/W0TaYjTbjGVz4dp3Es7Hc3Oi7fYvvwgC+mDSE/LDtQ7GQme9IxddVRLzPp7NOTtjdi/qYSG6d5B9ptn0uJOrhPB7WbSvgcXpTcaSw9qlC1GQm6XyarLyoNF7Ak3jpc3moyv20I/J1hGnktG8VncTd8yfGNy8rml8VmQN6ScWed4oTogrpOsq6EllM4ywU3aujcSPYz3e8SWuY7s2evEuWo8R32tq/nTD79307Ob0fYrid5/j52+A0XMovVfpP6v5Brw1Hffo/hDjfcz9y6gYHOPO6Lwode7M11oAcyJsZsgqcpxsOuvYjjzlZNbNDTsWDx6t+0kKWVDQDPRBmV0g6AJaVK2FJ3lQ/CaTaUwmw/Ub7RSWzPjeFr/oNFl4u+XQgoxhGYE+cNxEHrQWbwxCtgyyjyYDRvsthwvw+AcW5A2BBwgAAA==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Carl William",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254101617718",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
