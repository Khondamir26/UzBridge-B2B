"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo({
  currentSection,
  setCurrentSection,
}: {
  currentSection: number;
  setCurrentSection: (page: number) => void;
}) {
  const totalSections = 6;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentSection > 0) {
                setCurrentSection(currentSection - 1);
              }
            }}
          />
        </PaginationItem>

        {[...Array(totalSections)].map((_, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink
              href="#"
              isActive={currentSection === idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection(idx);
              }}
            >
              {idx + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentSection < totalSections - 1) {
                setCurrentSection(currentSection + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
