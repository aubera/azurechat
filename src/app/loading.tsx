import { PageLoader } from "@/features/ui/page-loader";

export default function Loading() {
  return (
      <div className="App" data-testid="loading">
        <PageLoader />
      </div>
  );
}
