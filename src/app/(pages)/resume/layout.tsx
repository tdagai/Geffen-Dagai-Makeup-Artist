import { PropsWithChildren } from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geffen MUA | Resume'
}
export default function ClientLayout({ children }: PropsWithChildren) {
  return children
}