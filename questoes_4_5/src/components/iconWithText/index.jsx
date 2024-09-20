import { GiConfirmed } from "react-icons/gi";

export const IconWithText = ({ icon, text }) => {
  return (
    <article className="flex items-center gap-3">
      <div className="bg-amber-400 text-5xl flex w-fit rounded-full p-4 text-white items-center">
        {icon}
      </div>

      <div className=" flex items-center gap-5 font-semibold">
        <p className="text-start text-sm text-wrap">{text}</p>
        <GiConfirmed className="text-lg flex-shrink-0 text-green-500" />
      </div>
    </article>
  );
};
