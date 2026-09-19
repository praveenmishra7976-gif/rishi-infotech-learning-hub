export interface SanskritChapter {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export const sanskritChapters: SanskritChapter[] = [

{
id:1,
title:"Introduction to Sanskrit",
slug:"introduction",
description:"History and Importance of Sanskrit",
content:`
Introduction

• Origin

• Importance

• Usage

• Literature

`
},

{
id:2,
title:"वर्णमाला",
slug:"varnamala",
description:"Sanskrit Alphabet",
content:`
वर्णमाला

स्वर

व्यंजन

उच्चारण

`
},

{
id:3,
title:"संधि",
slug:"sandhi",
description:"Rules of Sandhi",
content:`
संधि

स्वर संधि

व्यंजन संधि

विसर्ग संधि

`
},

{
id:4,
title:"समास",
slug:"samas",
description:"Types of Samas",
content:`
समास

द्वन्द्व

तत्पुरुष

बहुव्रीहि

`
},

{
id:5,
title:"कारक",
slug:"karak",
description:"Karak in Sanskrit",
content:`
कर्ता

कर्म

करण

अपादान

`
},

{
id:6,
title:"शब्द रूप",
slug:"shabd-roop",
description:"Important Shabd Roop",
content:`
राम

फल

बालक

नदी

`
}

];