import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

interface CreateListDialogProps {
  newListName: string;
  onNewListNameChange: (value: string) => void;
  onCreateList: () => void;
}

const CreateListDialog = ({ newListName, onNewListNameChange, onCreateList }: CreateListDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New List
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-cinema-forest border-cinema-sage/20">
        <DialogHeader>
          <DialogTitle className="text-cinema-text">Create New List</DialogTitle>
          <DialogDescription className="text-cinema-text/60">
            Give your list a name and start adding movies to it.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2">
          <Input
            value={newListName}
            onChange={(e) => onNewListNameChange(e.target.value)}
            placeholder="Enter list name..."
            className="bg-cinema-forest border-cinema-sage/50 text-white"
          />
          <Button 
            onClick={onCreateList}
            className="bg-cinema-sage hover:bg-cinema-sage/90"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListDialog;