import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Obituary } from '@/store/obituaryStore';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useObituaryStore } from '@/store/obituaryStore';
import { useState } from 'react';
import ObituaryForm from '../obituaryForm/ObituaryForm';

const ObituaryCard = ({ obituary }: { obituary: Obituary }) => {
  const fullName = `${obituary.deceasedFirstName} ${obituary.deceasedLastName}`;
  const formattedBirthDate = obituary.deceasedBirthDate?.toLocaleDateString() ?? 'Unknown';
  const formattedDeathDate = obituary.dateOfPassing?.toLocaleDateString() ?? 'Unknown';
  const formattedInternmentDate = obituary.dateOfInternment?.toLocaleDateString() ?? 'Unknown';
  const wakeLocation = obituary.wakeLocation || 'Not specified';

  const removeObituary = useObituaryStore((state) => state.deleteObituary);
  const [isEditing, setIsEditing] = useState(false);  // Add state for edit dialog

  const handleDelete = () => {
    removeObituary(obituary.id);  // Assumes each obituary has a unique 'id'
  };

  return (
    <Card className="w-full shadow-md border">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={obituary.images?.[0] || ''} />
            <AvatarFallback>
              {obituary.deceasedFirstName[0]}{obituary.deceasedLastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{fullName}</p>
            <p className="text-sm text-gray-500">
              {formattedBirthDate} - {formattedDeathDate}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>...</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setIsEditing(true)}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-700">{obituary.obituaryText || 'No obituary text available.'}</p>
        <p className="text-sm text-gray-600">
          <strong>Date of Internment:</strong> {formattedInternmentDate}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Wake Location:</strong> {wakeLocation}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">
          <strong>Funeral Service Provider:</strong> {obituary.funeralServiceProvider?.join(', ') || 'N/A'}
        </p>
      </CardFooter>

      {/* Edit Obituary */}
      {isEditing && (
        <ObituaryForm initialData={obituary} onClose={() => setIsEditing(false)}/>
      )}
    </Card>
  );
};

export default ObituaryCard;
