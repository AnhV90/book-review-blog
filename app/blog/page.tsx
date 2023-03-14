import Image from "next/image";

export default function Blog() {
  return (
    <div className="h-96 relative">
      <Image
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5970&q=80"
        alt="Blogs"
        fill
        style={{ objectFit: "cover", overflow: "hidden" }}
      />
    </div>
  );
}
