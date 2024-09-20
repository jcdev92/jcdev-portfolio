import { profile } from "@/lib/data/data";
import ProfileCard from "../../components/ui/contact/ProfileCard";
import LinksConteiner from "../../components/ui/contact/LinksContainer";

export default function ContactSection() {
  const {
    alias,
    firstName,
    lastName,
    birthDay,
    city,
    country,
    gender,
    phone,
    mail,
    socials,
  } = profile;

  
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col border rounded-lg bg-background/80 shadow-lg hover:scale-105 transition-all ease-in-out backdrop-blur-sm">
          <ProfileCard
            alias={alias}
            firstName={firstName}
            lastName={lastName}
            birthDay={birthDay}
            city={city}
            country={country}
            gender={gender}
          />
          <LinksConteiner socials={socials} phone={phone} mail={mail}/>
        </div>
      </div>
    </div>
  );
}
