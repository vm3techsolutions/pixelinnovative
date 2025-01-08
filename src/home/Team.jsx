import React, { useEffect, useState } from 'react';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch the team data from the JSON file
    fetch('/teams.json') // Adjust the path if the file is located elsewhere
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error('Error fetching team members:', error));
  }, []);

  return (
    <>
      <div className="py-6">
        {/* Section Heading */}
        <div className="text-center">
          <h3 className="text-4xl mt-12 text-primary font-bold relative inline-block">
            Our
            <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-secondary"></span>
            <span className="text-secondary"> Team</span>
          </h3>
        </div>

        {/* Team Members */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 px-24">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-[300px] mx-auto text-center">
              <img
                src={member.photo}
                alt={member.name}
                className=" w-full h-40  object-cover"
              />
              <h4 className="text-xl font-semibold text-primary mt-2">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
