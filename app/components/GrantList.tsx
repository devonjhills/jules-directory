import type { Grant } from "../../types"; // Verify path
import GrantCard from "./GrantCard"; // Verify path

interface GrantListProps {
  grants: Grant[];
}

const GrantList: React.FC<GrantListProps> = ({ grants }) => {
  if (!grants || grants.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No grants found.</p>
    ); // Added some styling
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-0 max-w-7xl mx-auto">
      {grants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
    </div>
  );
};
export default GrantList;
