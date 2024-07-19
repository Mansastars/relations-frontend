// The file contains the Column desgin for the dashboard
import classNames from "classnames";

export function Column({ titles, titleColors, contents }) {
  const ColumnClasses = classNames(
    "shadow-lg",
    "rounded-2xl",
    "w-full"
    // 'relative',
  );

  const TitleStyle = {
    color: titleColors,
    minWidth: "210px",
  };

  const ColumnStyle = {
    backgroundColor: "rgb(255, 255, 255)",
  };

  return (
    <div
      className=" flex flex-col gap-5 items-center w-full "
      style={{ maxWidth: "calc(100% - 224px)" }}
    >
      <div className={ColumnClasses} style={ColumnStyle}>
        <div
          className="font-bold text-xl p-5 text-center w-full "
          style={TitleStyle}
        >
          {titles}
        </div>
      </div>
      <div
        className=" w-full overflow-x-hidden"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}
      >
        {contents}
      </div>
    </div>
  );
}
