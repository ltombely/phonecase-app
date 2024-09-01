type SrcProps = {
    src: string;
};

export default function UserImage({ src }: SrcProps) {
    return (
        <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
            src={src}
            alt="user image"
        />
    );
}
