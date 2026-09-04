import React from 'react';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="topbar">
      <span>⏰ LIMITED TIME OFFER ⏰</span>
      <Link href="/pricing" className="topbar__cta">
        See pricing →
      </Link>
    </div>
  );
}
