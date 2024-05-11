const { RightArrow } = require("@/assets/icons");
const NavArrows = ({ scrollLeft, scrollRight }) => {
  return (
    <div className="flex w-[46px]">
      <span className="rotate-180" onClick={scrollLeft}>
        <RightArrow width={23} height={25} />
      </span>
      <span onClick={scrollRight}>
        <RightArrow width={23} height={25} />
      </span>
    </div>
  );
};

export default NavArrows;

// const { RightArrow } = require("@/assets/icons");

// const NavArrows = () => {
//   return (
//     <div className="flex w-[46px]">
//       <span className="rotate-180">
//         <RightArrow width={23} height={25} />
//       </span>
//       <RightArrow width={23} height={25} />
//     </div>
//   );
// };

// export default NavArrows;
