import Modal from "@/components/Modal";
import "./globals.css";

export const metadata = {
  title: "Trello Clone",
  description: "Trello clone built using Next 13.4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Modal />
      </body>
    </html>
  );
}
