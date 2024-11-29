import React from 'react';
import PropTypes from 'prop-types';
import TeamListRow from './MemberListRow';

const MemberList = ({ array }) => {
  return (
    <div>
      {array.map((member) => (
        <TeamListRow
          key={member.id}
          memberId={member.id}
          memberName={member.name}
          memberRole={member.role}
          memberEmail={member.email}
        />
      ))}
    </div>
  );
};

// Define the expected structure of the array prop
MemberList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Each member must have a unique numeric ID
      name: PropTypes.string.isRequired, // Name must be a string
      role: PropTypes.string.isRequired, // Role must be a string
      email: PropTypes.string.isRequired, // Email must be a string
    })
  ).isRequired, // The array itself is required
};

export default MemberList;
