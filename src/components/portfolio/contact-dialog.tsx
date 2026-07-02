"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Loader2, Mail, X } from "lucide-react";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitState =
  | { status: "idle"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactDialog({
  buttonLabel = "Email me",
  children,
  className,
  variant = "primary",
  ariaLabel,
}: {
  buttonLabel?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "icon";
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isEmailInvalid =
    form.email.trim() !== "" && !emailPattern.test(form.email.trim());

  const isFormValid = useMemo(
    () =>
      form.name.trim().length >= 2 &&
      emailPattern.test(form.email.trim()) &&
      form.message.trim().length >= 10,
    [form.email, form.message, form.name],
  );

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormValid || loading) return;

    setLoading(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(data?.error ?? "Message could not be sent.");
      }

      setSubmitState({
        status: "success",
        message: `Message sent. Leon can reply directly to ${form.email}.`,
      });
      setForm(initialForm);
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? `${error.message} You can also email ${profile.email} directly.`
            : `Message could not be sent. You can also email ${profile.email} directly.`,
      });
    } finally {
      setLoading(false);
    }
  }

  const dialog = open
    ? createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/40 p-4 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="flex min-h-full items-start justify-center py-4 sm:py-8">
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-dialog-title"
              aria-describedby="contact-dialog-description"
              className="relative flex max-h-[calc(100dvh-4rem)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-2xl sm:max-h-[calc(100dvh-7rem)]"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="shrink-0 border-b bg-popover p-4 pr-14">
                <p className="fine-label">Contact form</p>
                <h2
                  id="contact-dialog-title"
                  className="mt-2 text-xl font-semibold text-foreground"
                >
                  Send Leon a message
                </h2>
                <p
                  id="contact-dialog-description"
                  className="mt-2 text-sm leading-6 text-muted-foreground"
                >
                  Use this form for software, data, mobile, AI engineering,
                  internship, or collaboration opportunities.
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="absolute right-4 top-4 grid size-9 place-items-center rounded-md border bg-background text-foreground hover:border-primary hover:text-primary"
                  aria-label="Close contact form"
                  onClick={() => setOpen(false)}
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </div>

              <form
                className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4 sm:p-6"
                onSubmit={handleSubmit}
              >
                <Field id="contact-name" label="Name" required>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    className={inputClassName}
                    autoComplete="name"
                    required
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="contact-email"
                    label="Email"
                    required
                    error={isEmailInvalid ? "Enter a valid email address." : ""}
                  >
                    <input
                      id="contact-email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      className={inputClassName}
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field id="contact-phone" label="Phone">
                    <input
                      id="contact-phone"
                      value={form.phone}
                      onChange={(event) =>
                        setForm({ ...form, phone: event.target.value })
                      }
                      className={inputClassName}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field id="contact-message" label="Message" required>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    className={cn(inputClassName, "min-h-36 resize-y")}
                    required
                  />
                </Field>

                {submitState.status !== "idle" && (
                  <p
                    className={cn(
                      "rounded-md border px-3 py-2 text-sm",
                      submitState.status === "success"
                        ? "border-primary/40 bg-secondary text-secondary-foreground"
                        : "border-destructive/40 bg-destructive/10 text-destructive",
                    )}
                    role="status"
                    aria-live="polite"
                  >
                    {submitState.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-semibold text-ink hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-55"
                  disabled={!isFormValid || loading}
                >
                  {loading && (
                    <Loader2
                      aria-hidden="true"
                      className="size-4 animate-spin"
                    />
                  )}
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            </section>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        className={cn(triggerClassName(variant), className)}
        aria-label={ariaLabel ?? buttonLabel}
        onClick={() => {
          setSubmitState({ status: "idle", message: "" });
          setOpen(true);
        }}
      >
        {children ?? (
          <>
            <Mail aria-hidden="true" className="size-4" />
            {buttonLabel}
          </>
        )}
      </button>
      {dialog}
    </>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function triggerClassName(variant: "primary" | "secondary" | "icon") {
  if (variant === "icon") {
    return "grid size-10 place-items-center rounded-md border bg-card text-foreground hover:border-primary hover:text-primary";
  }

  if (variant === "secondary") {
    return "inline-flex min-h-11 items-center gap-2 rounded-md border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary";
  }

  return "inline-flex min-h-11 items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-semibold text-ink hover:bg-white";
}

const inputClassName =
  "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";
