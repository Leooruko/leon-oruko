"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Loader2,
  TableProperties,
} from "lucide-react";

export type DataArtifactProps = {
  /** Heading shown above the artifact panel, e.g. "Data Pipeline Artifact" */
  title: string;
  /** One or two sentence description of what the artifact demonstrates */
  description: string;
  /** Public path to the sanitized CSV, e.g. "/data/lending-ops/....csv" */
  csvUrl: string;
  /** Filename to use when the CSV is downloaded */
  csvDownloadName: string;
  /** Public path to the documentation PDF */
  pdfUrl: string;
  /** Filename to use when the PDF is downloaded */
  pdfDownloadName: string;
  /** Short note shown under the buttons, e.g. row/column count and sanitization note */
  note?: string;
};

type ParsedCsv = {
  headers: string[];
  rows: string[][];
};

const ROWS_PER_PAGE = 10;

function parseCsv(text: string): ParsedCsv {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((line) => line.length > 0);

  const parseLine = (line: string): string[] => {
    const cells: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];
      if (inQuotes) {
        if (char === '"' && line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else if (char === '"') {
          inQuotes = false;
        } else {
          current += char;
        }
      } else if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        cells.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    cells.push(current);
    return cells;
  };

  const [headerLine, ...rowLines] = lines;
  const headers = headerLine ? parseLine(headerLine) : [];
  const rows = rowLines.map(parseLine);

  return { headers, rows };
}

export function DataArtifact({
  title,
  description,
  csvUrl,
  csvDownloadName,
  pdfUrl,
  pdfDownloadName,
  note,
}: DataArtifactProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [data, setData] = useState<ParsedCsv | null>(null);
  const [page, setPage] = useState(0);

  const pageCount = data ? Math.max(1, Math.ceil(data.rows.length / ROWS_PER_PAGE)) : 1;

  const visibleRows = useMemo(() => {
    if (!data) return [];
    const start = page * ROWS_PER_PAGE;
    return data.rows.slice(start, start + ROWS_PER_PAGE);
  }, [data, page]);

  async function handleToggleViewer() {
    const opening = !viewerOpen;
    setViewerOpen(opening);

    if (opening && status === "idle") {
      setStatus("loading");
      try {
        const response = await fetch(csvUrl);
        if (!response.ok) throw new Error("Request failed with status " + response.status);
        const text = await response.text();
        setData(parseCsv(text));
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    }
  }

  return (
    <div className="signal-card rounded-xl p-5 sm:p-6">
      <p className="fine-label">Data Pipeline Artifact</p>
      <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleToggleViewer}
          aria-expanded={viewerOpen}
          aria-controls="data-artifact-viewer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground no-underline hover:opacity-90"
        >
          <TableProperties aria-hidden="true" className="size-4" />
          {viewerOpen ? "Hide Dataset" : "View Dataset"}
        </button>

        <a
          href={csvUrl}
          download={csvDownloadName}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border bg-background px-5 py-3 text-sm font-semibold text-foreground no-underline hover:border-primary hover:text-primary"
        >
          <Download aria-hidden="true" className="size-4" />
          Download CSV
        </a>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border bg-background px-5 py-3 text-sm font-semibold text-foreground no-underline hover:border-primary hover:text-primary"
        >
          <FileText aria-hidden="true" className="size-4" />
          View Data Documentation
        </a>

        <a
          href={pdfUrl}
          download={pdfDownloadName}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border bg-background px-5 py-3 text-sm font-semibold text-foreground no-underline hover:border-primary hover:text-primary"
        >
          <Download aria-hidden="true" className="size-4" />
          Download PDF
        </a>
      </div>

      {note ? <p className="mt-4 text-xs leading-5 text-muted-foreground">{note}</p> : null}

      {viewerOpen ? (
        <div id="data-artifact-viewer" className="mt-6 rounded-lg border bg-background">
          {status === "loading" ? (
            <div className="flex items-center gap-2 p-6 text-sm text-muted-foreground">
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Loading dataset…
            </div>
          ) : null}

          {status === "error" ? (
            <p className="p-6 text-sm text-destructive">
              The dataset could not be loaded right now. Use{" "}
              <a href={csvUrl} download={csvDownloadName} className="font-medium text-primary underline">
                Download CSV
              </a>{" "}
              to get the file directly.
            </p>
          ) : null}

          {status === "ready" && data ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b p-3 text-xs text-muted-foreground sm:px-4">
                <span>
                  {data.rows.length} rows &middot; {data.headers.length} columns
                </span>
                <span>
                  Showing {page * ROWS_PER_PAGE + 1}
                  &ndash;
                  {Math.min((page + 1) * ROWS_PER_PAGE, data.rows.length)} of {data.rows.length}
                </span>
              </div>

              <div className="max-h-[26rem] overflow-x-auto overflow-y-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-xs sm:text-sm">
                  <caption className="sr-only">
                    Sanitized sample rows from the lending operations data pipeline dataset
                  </caption>
                  <thead className="sticky top-0 bg-secondary text-secondary-foreground">
                    <tr>
                      {data.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="whitespace-nowrap px-3 py-2 font-semibold"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-t odd:bg-background even:bg-muted/40"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="whitespace-nowrap px-3 py-2 text-foreground"
                          >
                            {cell.trim() === "" ? (
                              <span aria-label="Missing value" className="text-muted-foreground">
                                &mdash;
                              </span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between gap-3 border-t p-3 sm:px-4">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(0, current - 1))}
                  disabled={page === 0}
                  aria-label="Show previous page of dataset rows"
                  className="inline-flex min-h-9 items-center gap-1 rounded-md border bg-background px-3 py-2 text-xs font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft aria-hidden="true" className="size-4" />
                  Previous
                </button>
                <span className="text-xs text-muted-foreground">
                  Page {page + 1} of {pageCount}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
                  disabled={page >= pageCount - 1}
                  aria-label="Show next page of dataset rows"
                  className="inline-flex min-h-9 items-center gap-1 rounded-md border bg-background px-3 py-2 text-xs font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
