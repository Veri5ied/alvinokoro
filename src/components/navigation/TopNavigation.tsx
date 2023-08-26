import Link from "next/link";

const TopNavigation = () => {
  return (
    <div className="topnavigation__container">
      <div className="topnavigation">
        <Link href={""}>home</Link>
        <Link href={""}>contact me</Link>
      </div>
    </div>
  );
};

export default TopNavigation;
