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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://qu.ax/cQZOL.jpg" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196335250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://qu.ax/cQZOL.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_21_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNlMCt2UnBuVFVDaWhGbERjYUtaWWpGSFVlRDdrWkIxWGE3ZkorZmZPZzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInp4Z0ZTY2I3UjdLeFZMd1Rnb3BkUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzI0MGQ5OGYtN2UzYy00ZjU2LThjMjUtYTVjZTMwN2UwMTRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDEwMSxcbiAgICAgIDEwLFxuICAgICAgMjEwLFxuICAgICAgNixcbiAgICAgIDE1OSxcbiAgICAgIDE2MCxcbiAgICAgIDUyLFxuICAgICAgNjgsXG4gICAgICAyMzAsXG4gICAgICA3NyxcbiAgICAgIDE3LFxuICAgICAgMjMsXG4gICAgICA0OSxcbiAgICAgIDEzLFxuICAgICAgMTM4LFxuICAgICAgMTI3LFxuICAgICAgMjQxLFxuICAgICAgOTgsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxMjksXG4gICAgICAyMTIsXG4gICAgICAxMzQsXG4gICAgICAyNTAsXG4gICAgICA2MCxcbiAgICAgIDU3LFxuICAgICAgMjgsXG4gICAgICAxMDYsXG4gICAgICA1OSxcbiAgICAgIDExMSxcbiAgICAgIDEzMSxcbiAgICAgIDg4LFxuICAgICAgMTcwLFxuICAgICAgMTQ0LFxuICAgICAgODcsXG4gICAgICA2OCxcbiAgICAgIDU0LFxuICAgICAgMzksXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDhWVk0yQVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NjMzNTI1MDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThILqr63wk4apXFxcIiDqr63wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIg8J2Qk/CdkIDwnZCB8J2QiPCdkJLwnZCHIPCThqrqr63qr60g4oC56q+twrPwk4aqIFxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjUzNjEwMzE4NjY3ODQ5OjY4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2UXo3UUhFUFBtOHJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1N5dkNQd3p5QmxmQXVPN3U1WTVVZjI4VitmQWdpTXpybTVIeEp2V24xdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRDhnMTEvZmwrNUtwbzUyclBKWU1vN2tPYkNZK28yYmtiNEZYbG1md2JlRDNBcXY5THNTUmxRUW8xUzFlVmU5NXprZzNWWEVkL1lmSDN5R2lDTnpEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnTS9kOSs3Y0hhZlByWUc4QjYwM1hmczJsV1Nub0J1eXBXZTVzbFEwVU9HVmVVY2N1R2xMSk5sYlh2cU02dkNGa1BlWEFiS0hmNEZoYWdUb1FXZXhnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTYzMzUyNTA6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxMjg1MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIY3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhjdi5qc29uIjogIntcImtleURhdGFcIjpcIlk4SGNCWStsbXRELzlPM1VZclNBanpiaEUyalBTRkJTM1UxS1FnYnNPaFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4OTQwNDY3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐓𝐚𝐛𝐢𝐬𝐡",
  packname: process.env.PACK_NAME || "𝐓𝐚𝐛𝐢𝐬𝐡",
  botname : process.env.BOT_NAME  || "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",
  ownername:process.env.OWNER_NAME|| "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'Tabish' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
