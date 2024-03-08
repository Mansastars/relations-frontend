// The file contains the Column desgin for the dashboard
import classNames from "classnames";

/**
 * This code snippet defines a function called Column that represents a column design for a dashboard.
 * 
 * @param {string} titles - The titles for the column.
 * @param {string} titleColors - The colors for the column titles.
 * @param {Array} contents - The contents of the column.
 * @returns {JSX.Element} - The JSX element representing the column design.
 */
export function Column({ titles, titleColors, contents }) {
    const ColumnClasses = classNames(
        'shadow-lg',
        'rounded-2xl',
        'w-full',
        // 'relative',
    );

    const TitleStyle = {
        color: titleColors,
        minWidth: '165px'
      };

      const ColumnStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
    };

    return (
        <div className=" flex flex-col gap-5 items-center w-full " style={{maxWidth: 'calc(100% - 224px)', }} >
            <div className={ColumnClasses} style={ ColumnStyle}>
                <div className="font-bold text-xl p-5 text-center w-full " style={TitleStyle}>{titles}</div>
            </div>
            <div className=" w-full overflow-x-hidden" style={{overflowY: 'auto', maxHeight: 'calc(100vh - 100px)'}}>
                {contents}
            </div>
        </div>
    )
}
