import { GitHub } from "../Icons"
import { AvatarBorder } from "./AvatarBorder"

export const User = ({ user }: { user: any }) => (
  <>
    <div className="relative h-[74px] sm:h-[64px] w-[74px] sm:w-[64px] m-auto">
      <img
        className="sm:w-[64px] sm:h-[64px] w-[74px] h-[74px] rounded-full"
        src={user.image}
        alt={user.username}
      />
      <AvatarBorder />
    </div>
    <h2 className="font-bossa text-lg pt-4 block w-full text-center leading-5">
      {user.name}
    </h2>
    <div className="flex items-center gap-2 text-xs justify-center mt-2">
      <GitHub width={14} height={14} className="text-slate-500" />
      <a href={`https://github.com/${user.username}`}>
        <h6 className="text-slate-500">{user.username}</h6>
      </a>
    </div>
  </>
)
