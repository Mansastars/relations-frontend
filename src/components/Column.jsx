// The file contains the Column desgin for the dashboard
import classNames from "classnames";

export function Column({ title, titleColor, content }) {
    const ColumnClasses = classNames(
        'max-w-xs',
        'mx-auto',
        'shadow-lg',
        'rounded-2xl',
        'w-full',
        'flex'
    );

    const TitleStyle = {
        color: titleColor,
        borderBottom: '1px solid  #d3d3d3',
      };

      const ColumnStyle = {
        //backdropFilter: 'blur(2px)', /* Equivalent to backdrop-blur-sm */
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        // border: `1px solid ${titleColor}`
    };

    return (
        <div className={ColumnClasses} style={ ColumnStyle }>
            <div className="p-2 rounded-2xl w-50">
                <div className="font-bold text-xl mb-2 p-2 text-center" style={TitleStyle}>{title}</div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}
