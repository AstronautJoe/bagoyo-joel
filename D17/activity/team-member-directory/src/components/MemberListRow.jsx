import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MemberListRow = ({ memberId, memberName, memberRole, memberEmail }) => {
  return (
    <Link to={`/members/${memberId}`} className="text-decoration-none">
      <div className="card mb-3" key={memberId}>
        <div className="card-body pe-auto ">
          <p>{memberName}</p>
        </div>
      </div>
    </Link>
  );
};

// Define PropTypes for individual props
MemberListRow.propTypes = {
  memberId: PropTypes.number.isRequired, // Unique numeric ID
  memberName: PropTypes.string.isRequired, // Name must be a string
  memberRole: PropTypes.string.isRequired, // Role must be a string
  memberEmail: PropTypes.string.isRequired, // Email must be a string
};

export default MemberListRow;
