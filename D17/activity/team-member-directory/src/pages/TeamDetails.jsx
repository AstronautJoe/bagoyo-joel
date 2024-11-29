import { useParams } from 'react-router-dom';
import TEAMDATA from '../team-data/team-data';

const TeamDetails = () => {
  const { memberId } = useParams();
  const member = TEAMDATA.find((member) => member.id === parseInt(memberId));
  if (!member) {
    return <p>Member not found!</p>;
  }
  return (
    <div>
      <img
        src="https://placehold.co/50x50"
        className="h-50 object-fit-contain"
      ></img>
      <h3>
        {member.name} - #{member.id}
      </h3>
      <p>Role: {member.role}</p>
      <p>Email: {member.email}</p>
    </div>
  );
};

export default TeamDetails;
