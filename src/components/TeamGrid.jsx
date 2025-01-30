import React from "react";
import TeamMember from "./TeamMember";

const TeamGrid = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
