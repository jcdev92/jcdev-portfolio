import Image from "next/image";

interface ProfileCardProps {
    alias: string;
    firstName: string;
    lastName: string;
    birthDay: string;
    city: string;
    country: string;
    gender: string;
}

export default function ProfileCard({ alias, firstName, lastName, birthDay, city, country, gender }: ProfileCardProps) {

    const formatedBirthday = new Date(birthDay).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <Image
          alt="hero"
          src="/hero.jpg"
          width={300}
          height={300}
          className="rounded-full object-cover max-w-full h-auto shadow-md shadow-primary-foreground"
        />
        <div className="text-center md:text-left">
          <h1 className="md:text-3xl font-bold text-yellow-500 text-shadow-alias">{`${alias}`}</h1>
          <h1 className="md:text-3xl font-bold text-primary-foreground">{`${firstName}`}</h1>
          <h1 className="md:text-3xl font-bold text-primary-foreground">{`${lastName}`}</h1>
          <p className="text-xs md:text-sm text-secondary-foreground">{`${city}, ${country} `}</p>
          <p className="text-xs md:text-sm text-secondary-foreground">{`${formatedBirthday} `}</p>
          <p className="text-xs md:text-sm text-secondary-foreground">{`${gender} `}</p>
        </div>
      </div>
    )
}