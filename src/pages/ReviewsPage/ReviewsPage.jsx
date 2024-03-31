import { Avatar, AvatarFallback, AvatarImage } from "src/app/components/ui/avatar";

const ReviewsPage = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ReviewsPage;
