import { profile } from "@/lib/data/data";
import ProfileCard from "../containers/ProfileContainer";
import LinksConteiner from "../containers/LinksContainer";

export default function ContactCard() {
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
      <LinksConteiner socials={socials} phone={phone} mail={mail} />
    </div>
  );
}
