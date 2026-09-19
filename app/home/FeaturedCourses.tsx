import Link from "next/link";

export default function FeaturedCourses() {

return(

<section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-5xl font-black">

Certificates

</h2>

<p className="mt-4 text-gray-600">

Download Professional Achievement Certificates

</p>

<Link

href="/certificate"

className="inline-block mt-10 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg font-bold"

>

Open Certificate Generator

</Link>

</div>

</section>

)

}