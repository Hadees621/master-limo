import ListItem from "./ListItem";
import { serviceListItems, ServicesSectionsData } from "@/util/para";

const ServiceList = () => {
  return (
    <div className="flex flex-col justify-center text-center ">
      <p className="font-Montserrat text-[19px] font-[700] uppercase tracking-[3.6px] text-[#FFFFFF]">
        Services
      </p>
      <div className="flex justify-center ml-20">
        <ul className="mt-5 flex list-inside list-disc flex-col space-y-1 whitespace-nowrap text-left">
          {ServicesSectionsData.map((item, index) => (
            <ListItem key={index} text={item.heading} id={item.number} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
