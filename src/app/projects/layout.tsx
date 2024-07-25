export default function MdxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-32">{children}</div>;
}
