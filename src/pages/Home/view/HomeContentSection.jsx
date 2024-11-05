import React from "react";
import { cn } from "../../../lib/utils";

function HomeContentSection({ className, children }) {
  return (
    <section className={cn("py-20 mt-5 relative ", className)}>
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        {children}
      </div>
    </section>
  );
}

export default HomeContentSection;
