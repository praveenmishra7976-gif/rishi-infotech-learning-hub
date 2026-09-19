interface Props{

word:string;

meaning:string;

language:string;

}

export default function WordCard({

word,

meaning,

language,

}:Props){

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

{word}

</h2>

<p className="mt-3 text-gray-500">

{language}

</p>

<p className="mt-6 text-lg">

{meaning}

</p>

</div>

);

}