export interface Tool {

  id:number;

  name:string;

  slug:string;

  description:string;

  category:string;

}

export const developerTools:Tool[]=[

{
id:1,
name:"QR Code Generator",
slug:"qr-generator",
description:"Generate QR Codes instantly.",
category:"Generator"
},

{
id:2,
name:"Password Generator",
slug:"password-generator",
description:"Generate secure passwords.",
category:"Generator"
},

{
id:3,
name:"JSON Formatter",
slug:"json-formatter",
description:"Beautify JSON.",
category:"Formatter"
},

{
id:4,
name:"Base64 Encoder",
slug:"base64-encoder",
description:"Encode & Decode Base64.",
category:"Converter"
},

{
id:5,
name:"Color Picker",
slug:"color-picker",
description:"Choose HEX & RGB colors.",
category:"Design"
},

{
id:6,
name:"HTML Formatter",
slug:"html-formatter",
description:"Format HTML code.",
category:"Formatter"
},

{
id:7,
name:"CSS Formatter",
slug:"css-formatter",
description:"Beautify CSS.",
category:"Formatter"
},

{
id:8,
name:"JavaScript Formatter",
slug:"js-formatter",
description:"Format JavaScript.",
category:"Formatter"
},

{
id:9,
name:"UUID Generator",
slug:"uuid-generator",
description:"Generate UUIDs.",
category:"Generator"
},

{
id:10,
name:"Hash Generator",
slug:"hash-generator",
description:"Generate Hash.",
category:"Security"
},

{
id:11,
name:"URL Encoder",
slug:"url-encoder",
description:"Encode URL.",
category:"Converter"
},

{
id:12,
name:"Timestamp Converter",
slug:"timestamp-converter",
description:"Unix Timestamp.",
category:"Converter"
},

{
id:13,
name:"Regex Tester",
slug:"regex-tester",
description:"Test Regex.",
category:"Developer"
},

{
id:14,
name:"Markdown Preview",
slug:"markdown-preview",
description:"Preview Markdown.",
category:"Developer"
},

{
id:15,
name:"Image Compressor",
slug:"image-compressor",
description:"Compress Images.",
category:"Media"
}

];