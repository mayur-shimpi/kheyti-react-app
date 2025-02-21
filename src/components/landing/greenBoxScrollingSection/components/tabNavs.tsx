import React from "react";
import HandMaintainSupport from "../../../icons/HandMaintainSupport";
import TrainingPractice from "../../../icons/TrainingPractice";
import SeedsHand from "../../../icons/SeedsHand";
import TechBack from "../../../icons/TechBack";


const NavItems = [
  {
    id: 1,
    name: "Installation and maintenance support",
    icon: HandMaintainSupport,
    isActive: false,
  },
  {
    id: 2,
    name: "Training on efficient crop practices",
    icon: TrainingPractice,
    isActive: false,
  },
  {
    id: 3,
    name: "Seeds and farming input recommendations",
    icon: SeedsHand,
    isActive: false,
  },
  {
    id: 4,
    name: "Tech-backed agri advisory",
    icon: TechBack,
    isActive: false,
  },
];

interface activeIndexProps {
    activeIndex : number
}
const TabNavs: React.FC<activeIndexProps> = ({activeIndex}) => {
  return (
    <div>
      <ul className="hidden lg:block">
        {NavItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={`flex items-center justify-start py-2 my-5 ${activeIndex === index ? "text-primary400" : "text-primary100" }`}>
              <div>
                <IconComponent className={`size-12 mr-3 ${activeIndex === index ? " text-primary400" : "text-primary100" }`} /> 
              </div>
              <div>
                <h6 className={`text-lg leading-4 ${activeIndex === index ? " font-cronosRegular" : "font-cronosRegular" }`}>{item.name}</h6>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TabNavs;
