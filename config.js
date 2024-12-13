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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://qu.ax/cQZOL.jpg" || "https://qu.ax/cQZOL.jpg" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_13_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTXEzQWl0Mmpob0hlQlNFUVBQZkppNzN1MStUOXVSMTNpKzRrTFBaaFRNVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWMtZl9UMGtSZm1UZm1hZ3Z1MTVJUVwiLFxuICBcInBob25lSWRcIjogXCJmNGE3ZjE5ZC0wZGQ4LTRhMzMtYTgzNi00YTBmNjQ1YTg0ZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyMjksXG4gICAgICAxOTksXG4gICAgICAxMzksXG4gICAgICAxODMsXG4gICAgICAxNDMsXG4gICAgICAxNzIsXG4gICAgICAzLFxuICAgICAgMjAzLFxuICAgICAgMTAyLFxuICAgICAgMjQyLFxuICAgICAgMTAsXG4gICAgICAzMyxcbiAgICAgIDEyOSxcbiAgICAgIDExMSxcbiAgICAgIDI0NixcbiAgICAgIDIzMCxcbiAgICAgIDc5LFxuICAgICAgMTMwLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTcyLFxuICAgICAgMTQ2LFxuICAgICAgMTAsXG4gICAgICA3NixcbiAgICAgIDcyLFxuICAgICAgODMsXG4gICAgICA2MyxcbiAgICAgIDcyLFxuICAgICAgMTc4LFxuICAgICAgMTMsXG4gICAgICA0NCxcbiAgICAgIDE1NyxcbiAgICAgIDExNSxcbiAgICAgIDEyOCxcbiAgICAgIDIyNCxcbiAgICAgIDIyNSxcbiAgICAgIDE0NCxcbiAgICAgIDE2MSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5YUzE5NzQyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTYzMzUyNTA6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4SC6q+t8JOGqVxcXCIg6q+t8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIPCdkJPwnZCA8J2QgfCdkIjwnZCS8J2QhyDwk4aq6q+t6q+tIOKAueqvrcKz8JOGqiBcXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JOGqfCWpI3wk4aqXCIsXG4gICAgXCJsaWRcIjogXCI1MzYxMDMxODY2Nzg0OTo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJclF6N1FIRU5TTzhyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtTeXZDUHd6eUJsZkF1Tzd1NVk1VWYyOFYrZkFnaU16cm01SHhKdlduMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3k5Um1hN1dGaCs2ZCtYY2F5c2pqNVFBcTRWdW9RK2dkQUd5WDgwS3VXa2I2V2FsOVF3YWJMU1B0aVpWc0lFUjB2V2t0My9RWmRqdnlUNUdSRjR2Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHJNZXVyRUExZjYwUk1CNTNOOUVwLzJZS1NDUGVlUDl2NTFscnZ0dHluZXRpT0RtUkp6MS85ODlFSkFyaThKM3NEbi9rd0ZzMkkvK0JqWnpJUUN5Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk2MzM1MjUwOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTE3MjA3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'Tabish' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
