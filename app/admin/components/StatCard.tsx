interface Props {

  title: string;

  value: string;

  color: string;

}

export default function StatCard({

  title,

  value,

  color,

}: Props) {

  return (

    <div className={`${color} text-white rounded-2xl p-8 shadow-lg`}>

      <h2 className="text-4xl font-bold">

        {value}

      </h2>

      <p className="mt-3 text-lg">

        {title}

      </p>

    </div>

  );

}