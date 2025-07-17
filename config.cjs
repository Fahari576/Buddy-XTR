// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA61U2Y6jSBD8l3q1Nc1VYCy1NBzGNr6wwedqHwooDpvLVAHGI//7Cnf3zEizO9sr7VuRVEVGZEbmN5DlMcEz3ILhN1CUcY0o7o60LTAYArUKAlyCPvARRWAIVpPpi5DNtpllQ+ayNDW9elGYpCHneRtf+OuOJBhNzs45Y17Bow+Kyk1i7zeAFsO15SqS18tNYVjskrpQ59iRu9HZVYRNyW55UVq0g3pNXsGjQ0RxGWfhqIhwikuUzHBrobj8HH2sj1HGttUcH4xYYpntbrRpKn+plBc+3FtNQLOLdl06Nbv9HH3Hue99eYbUfdtuY2txt5jtdZ722MU14oUx7W3nmr/pJfe78EafxGGG/amPMxrT9tN1x1qpbATjEBx5XFvRRrheVOPu6uObYqRrEvZ689Pmak7XRv454tWG5V1uShh74iWrVjkrt/aaueKJLibVrJ4vw2qm+lKgj5SfiVvlh1cu/6Xu+0V0vrObl8F+3ybOxnKLYnos3cZWjmTZ6iUMVvlxd2LOxuBz9A8VVCdL/pIJ9UpPBwmbetzLxJobO6NoXLH0b/MDe1q8jNPpD/qIVuXvWCbtbRbFbsC1fLvXROaujUR+zDmhuRMgrQ77gWuNVtblYi9r0pMReyg4aZHaTQZV9hieuLtQz8IqV/zjwa7N+uyaUG9en4ouuJ36YMg++qDEYUxoiWicZ12MZ/oA+bWNvRLTZ3WBFBbadDNxps3eWF/3LjO2he1Mz/MxW0l1lRupYNrL1vYd8gr6oChzDxOC/UlMaF62C0wICjEBwz+ejeo0lzjNKTZjHwwBBwUJDiAc8LzwlXxpIkQJKoovGaagD4IyTxcYDGlZ4T54PtBUWdQ0w1BVRuN0FkKD1RVGhpLBKqrOq53C9C2pE6eYUJQWYMhKkJNEnmH4R///4cExvDCSJJaHrKHzMiMyA47XOJmRdUOCGv8vPOTHn32Q4Rt9s/Gz+GwfBHFJ6DariiRH/ofHP34iz8urjNpt5mndAZdg+FMYUxpnIemUVRkqvSiusdbpAMMAJQR/7zcusf+h5X2Habnf2dDhGG7MsSfQce+AfqnNUP61OhnqLgMlxBllGBb0QfJ8ByWOkUUeQmbAQWkof+3Cj++EO3wfUxQnpOvr7MUWi8t4tEJbuFiMx8oxVLRQAT8EfszNuzG11hykdZTf7rK1bQ5OOmlammWTdHKkYg+Hvkwu3Bza9uj1b0DAEMSKGyk7OZNcxRpfuIOeiHO+gS/MgTjNeHPdj7hzZB4GwhLvqJePxvBq9qrTPHSq3aCKG4X1rvnsqpozyN4LexptZqqqvHbZfFzHHv45WbNTvdPVPu+y6MS1Pca7LePdAK4DYcYfIDFQKG4n8+xe1RBmY1USjH3PcRZsT78ma7w7R/wuvYnqqhVZszBhPvL04zPZx0ZJ3jd5/D5s8fMziPFzMb736N9a+ca7Mxzz6P8E8b5p/2FbqbghcWCWAlp4Lw67MBgYDRblCd5gxM1xneWTwDWXcW97icCjc36RIBrkZQqGgKQuAn1Q5lVn32kW5L/JpCnTqb5+U50gQpUfI/HLlHGyzLzdssq8mCASgSFgZ0I0ETp/t0pR2BTRjwkDirJVFOUugsdfCWAu84sIAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
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
