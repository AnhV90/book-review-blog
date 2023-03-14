export default function PostWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-post grid-cols-1 gap-4 mt-4 mx-auto">
      <article className="max-w-none prose prose-stone prose-md">
        {children}
      </article>
    </div>
  );
}
