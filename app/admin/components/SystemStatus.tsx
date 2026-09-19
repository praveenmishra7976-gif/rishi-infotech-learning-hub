export default function SystemStatus(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-2xl font-bold">

System Status

</h2>

<div className="space-y-5 mt-8">

<div className="flex justify-between">

<span>Server</span>

<span className="text-green-600 font-bold">

Online

</span>

</div>

<div className="flex justify-between">

<span>Database</span>

<span className="text-green-600 font-bold">

Connected

</span>

</div>

<div className="flex justify-between">

<span>Supabase</span>

<span className="text-green-600 font-bold">

Running

</span>

</div>

</div>

</div>

);

}