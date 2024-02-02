// This file contains the list of tables
import { Card } from "./Cards";
import { Column } from "./Column";

export const Tables = () => {
    return (
      <div className="flex gap-1 pb-10 overflow-y-auto overflow-x-auto" >
        <Column title="Research" titleColor='#fc6e51' content={Card('#fc6e51')} />

        <Column title="Contacted" titleColor='#3bafda' content={Card('#3bafda')} />

        <Column title="Pitch"  titleColor='#967adc' content={Card('#967adc')} />

        <Column title="Negotiation" titleColor='blue' content="Card content 3" />

        <Column title="Deal" titleColor='grey' content="Card content 3" />

        <Column title="Not a Fit" titleColor='brown' content="Card content 3" />
      </div>
    );
};
