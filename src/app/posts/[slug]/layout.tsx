export default function MdxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="m-auto w-full">{children}</div>;
}
