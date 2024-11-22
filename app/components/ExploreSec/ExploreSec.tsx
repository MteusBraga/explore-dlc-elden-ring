import { TabRegions } from "../Tabs/TabRegions";
import { TabBosses } from "../Tabs/TabBosses";
import { TabNPCs } from "../Tabs/TabNPCs";
import { TabCreatures } from "../Tabs/TabCreatures";

export const ExploreSec = () => (
  <div className="relative min-h-screen *:p-10  bg-[url(/trailer-bg.jpg)]  bg-cover bg-no-repeat bg-bottom flex flex-col">
    {/* Overlay escuro */}
    <div className="absolute inset-0 bg-black opacity-80"></div>

    {/* Conteúdo */}
    <div className=" max-w-[1024px] relative z-10 text-white  flex flex-col items-start self-center">
      <h1 className="text-4xl  font-bold mt-[5rem]">Explore Universe</h1>
      <div
        role="tablist"
        className="tabs tabs-bordered mt-[6rem] *:max-w-[1280px]"
      >
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-white"
          aria-label="Bosses"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10 ">
          <TabBosses></TabBosses>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-white"
          aria-label="Regions"
        />
        <div role="tabpanel" className="tab-content p-10">
          <TabRegions></TabRegions>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-white"
          aria-label="NPC's"
        />
        <div role="tabpanel" className="tab-content p-10">
          <TabNPCs></TabNPCs>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-white"
          aria-label="Creatures"
        />
        <div role="tabpanel" className="tab-content p-10">
          <TabCreatures></TabCreatures>
        </div>
      </div>
    </div>
  </div>
);
