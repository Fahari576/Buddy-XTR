// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VVa5OiOBT9K1v5qjWKvK3qquWptNqiiApb+yFCxDTyMAkiTPnft7C7Z6Z2dmd7+RQScu859557+AryAlM0Qw0YfwUlwVfIULdkTYnAGOjV8YgI6IMYMgjGYOc6J6ua0a2woyiLNH8TzK5qs0hvc37L6/VIyb3DJBwOOe0J3PugrA5nHP0i4LFyVn4e4Vrl7WAZJtNJQER4Omw4RtdzzZRXVjAbXDdKkj6BexcRYoLzxCpPKEMEnmeocSEmn4PfWCY7jnaHvUg8RV1Pw1Y1aESP/K3S/CywZ1aE29sVTafO5+Ab2D15B6/UgzmuniU6sC+hPUxTnzWz3PRTb6W8TCcxJkP6Bp/iJEexE6OcYdZ8uu6Kq7B2dtBPQum522kKNTPaZbYUvKTbLTQD0cc5WlqxuU0+B3wUw20vgZMXnFZ2VQWWGfLZxYaT1il63KusmtetNhNG8qb4EbhLPrSS/p+6W8/GasDHBrLrdTh32Eh5sUWt8n0lQhdt4crVSGyFyjSn6efgRy2pe/vJnF2P4TJ0E3ujjpqE851FOO1N1Go9ydvRRhUFr/4OH7KK/AplWfRunCiV56J1inkOi9vgoDt2fnItRgKPXur2GTvuTE2w2pYbk9ctNcxaz+VLThtQvV0Zk03tG14vENStv7iSptZXTw9GKWqcGIy5ex8QlGDKCGS4yLs9We4DGF89FBHEHtUF0q3YxLm6nFvU2MZzY1XBoLfr2clcU2/CSpV8st6jZEBa/wn0QUmKCFGK4immrCDNAlEKE0TB+I9HozrOBGUFQ8847povCrI65CRBkYa/0y/1CTIKy/JLjhjogyMpsgUCY0Yq1AePC+bQUoWRYHGGJFu6KSuaKimyZYuWrlmiJncMs7ekG5whymBWgjEniyNZ5jhRvP/ZBzm6sTf5dKR5rg+OmFDm51V5LmD8oa2PQxhFRZUzr8kjo1sgAsbD79uIMZwntGNW5ZBEJ3xFRscDjI/wTNG3OiOC4g8u795hFHHXfnu93KwUnQcd9i7QT7UZ8+rP5clh9zVY7l5+05eeB/rg/LjIcUNVFXmB5xRZVeXubndw/4a5SxEjBvGZds7hugp2Bd2av/riYjGZaFaiGYkGvnP8kOybJpArhGnT8ut8P72pF5SHVil4GM3WU9FY7Oy2TObTueEom4cm/h4EjMHKH72uLu11O1idqzMdDm45nxI7scggglF9XeO0kE7KcL9uK3PfKNL1uo3SQPWbxhjGN//Zg5drkx2WnjLdaeu6Kp4ls37qssXoiiP0YzLe2SEv2UlysLo0dRmLy8PB4g7DMPJ4/pKXry72Dm5h0v1mx28gLhyOTGzulN2WssTJejgpsguyn+MXmts3kfmLKtbqt2F6DPP53UTxu87x4/WI0cOT3rv0n918A96Jbnjv/xDj3eX+xSn0/WtvEi6oOgy5m3KEeTlaz5BV5Dhd91av9imSAuPW1Ni1OHDv1F+eITsWJANjQLMDBH1AiqqTsJMfi1/9YDTHMd895Awp076PxT9MGq++feWSopxCegJj4O5SUe8k3mhl6THIPoYMaN0zhwdw/wuL1YuzBggAAA==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : true,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Carl William",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254101617718",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};


module.exports = config;
