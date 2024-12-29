const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221777873158";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_54_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1RSjhvbUpQMUJsdDlVS2pUeEQyaytrK093SitiWitpY2RQOWNDeS92S2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpOZ2RCdjYxUUYtcVVITHZTSnFvcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjNmZjVmZTUtYjg5Yi00YjBjLWFkOGItZTg5OGQyOGM5MGJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE3NCxcbiAgICAgIDE2NCxcbiAgICAgIDIzNSxcbiAgICAgIDg5LFxuICAgICAgMjE2LFxuICAgICAgMjMsXG4gICAgICAxMTYsXG4gICAgICAyNSxcbiAgICAgIDIwMCxcbiAgICAgIDc4LFxuICAgICAgMTU1LFxuICAgICAgNDMsXG4gICAgICAxNDQsXG4gICAgICAxNDMsXG4gICAgICAxNDIsXG4gICAgICAxMDYsXG4gICAgICAyNDksXG4gICAgICAyMTUsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyMjcsXG4gICAgICA3LFxuICAgICAgNDAsXG4gICAgICAyMDgsXG4gICAgICAxMTksXG4gICAgICA1MCxcbiAgICAgIDExOSxcbiAgICAgIDE1MCxcbiAgICAgIDE1NSxcbiAgICAgIDExMixcbiAgICAgIDI0MCxcbiAgICAgIDIyMSxcbiAgICAgIDE3MCxcbiAgICAgIDE4NSxcbiAgICAgIDIxMSxcbiAgICAgIDEsXG4gICAgICA0OCxcbiAgICAgIDgyLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlNRRDJNNzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc3Nzg3MzE1ODo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0OTUyNDM1ODUxMjczOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPTC9vZ0RFTW03d3JzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTVVkYjhqKytxbDlQZkpveWJ6Uy9jUGMvYzR6V2gxUGJvRTBNQUtBbXVoVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4T2Y1RzRxWFp3c01UUTBRQnYyQmtXTnZiVktrdVpjRVZXeW42dElja3ROOS81bHlHY0Jrdk5ybnBERllSZ0lsdzkyUXRqTDlPbkZJMWhBQXRoN0tDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmV1RJR1JVYkRFUWRxNCtjZm5Wakt5N0ZXS0tGTUI2cVBzd1k3UWFxSGJoNVVRa1RPc095eEVUOTZwelRFRkoxNzRJRVNyTFhlVTI4VTFmRHdybk1CQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3Nzc4NzMxNTg6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQzMzY3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtLdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0t1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ2Y2SWpoN2VSOEF6S2o1REw2dVVJaUpiNWtyZW15bitYb0h2RGIvYlUxcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjQxNDk0OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg4MjA3ODY3MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MEDMO",
  packname: process.env.PACK_NAME || "MEDMO",
  botname : process.env.BOT_NAME  || "LIN KUEI",
  ownername:process.env.OWNER_NAME|| "MEDMO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
