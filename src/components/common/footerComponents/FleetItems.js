import { OurFleetSections } from "@/util/para";
import ListItemfleet from "./ListItemfleet";

const FleetItems = () => {
  return (
    <div className="flex flex-col justify-center text-center md:justify-start lg:ml-10">
      <p className="font-Montserrat text-[19px] font-[700] uppercase tracking-[3.6px] text-[#FFFFFF]">
        THE FLEET
      </p>
      <div className="lg:justify- flex justify-center">
        <ul className="mt-5 flex list-inside list-disc flex-col space-y-1 whitespace-nowrap text-left">
          {OurFleetSections.map((item, index) => (
            <ListItemfleet key={index} name={item.name} id={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FleetItems;
