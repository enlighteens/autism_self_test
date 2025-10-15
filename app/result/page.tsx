import { Suspense } from "react";

import ResultPageContent from "./result-content";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="card result-card">Loading results…</div>}>
      <ResultPageContent />
    </Suspense>
  );
}
