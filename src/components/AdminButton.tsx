import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const AdminButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => navigate("/admin")}
      className="fixed bottom-4 right-4 shadow-elevated"
    >
      <Settings className="w-4 h-4 mr-2" />
      Admin
    </Button>
  );
};