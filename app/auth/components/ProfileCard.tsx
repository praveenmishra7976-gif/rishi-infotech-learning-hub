export default function ProfileCard(){

return(

<div className="bg-white rounded-3xl shadow-lg p-10 max-w-xl mx-auto">

<div className="w-28 h-28 rounded-full bg-blue-700 text-white flex items-center justify-center text-4xl font-bold mx-auto">

A

</div>

<h2 className="text-3xl font-bold text-center mt-6">

Administrator

</h2>

<p className="text-center text-gray-500">

admin@example.com

</p>

<div className="mt-10 space-y-4">

<div className="flex justify-between">

<span>Role</span>

<strong>Super Admin</strong>

</div>

<div className="flex justify-between">

<span>Status</span>

<strong className="text-green-600">

Active

</strong>

</div>

</div>

</div>

);

}