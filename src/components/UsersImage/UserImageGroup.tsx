import UserImage from "../UserImage/UserImage";

export default function UserImageGroup() {

  return(
    <div className="flex -space-x-4">
    <UserImage src="/users/user-1.png" />
    <UserImage src="/users/user-2.png" />
    <UserImage src="/users/user-3.png" />
    <UserImage src="/users/user-4.jpg" />
    <UserImage src="/users/user-5.jpg" />
</div>
  )
}