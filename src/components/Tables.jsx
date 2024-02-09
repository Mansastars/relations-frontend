// This file contains the list of tables
import { Card } from "./Cards";
import { Column } from "./Column";
import Research from "./TableContactsRoute";

export const Tables = () => {
  // if the table is not avaliable by default create it
    return (
      <div className="flex gap-2 pb-10 overflow-y-auto overflow-x-auto" >
        <Column titles="Research" titleColors='#fc6e51' contents={<Research borderColour='#fc6e51' />} />

        <Column titles="Contacted" titleColors='#3bafda' contents="" />

        <Column titles="Pitch"  titleColors='#967adc' contents="" />

        <Column titles="Negotiation" titleColors='blue' contents="" />

        <Column titles="Deal" titleColors='grey' contents="" />

        <Column titles="Not a Fit" titleColors='brown' contents="" />
      </div>
    );
};
