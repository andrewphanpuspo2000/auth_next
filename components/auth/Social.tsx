import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="flex-1 border border-blue-500"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        className="flex-1 border border-green-500"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
