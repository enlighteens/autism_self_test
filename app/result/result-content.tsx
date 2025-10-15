"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "../../data/questions";

type Answer = "yes" | "no";

const STORAGE_KEY = "autism-self-test-answers";

export default function ResultPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const statusParam = searchParams.get("status");
  const yesCountParam = Number(searchParams.get("yesCount"));

  const isPositive = statusParam === "positive";
  const isNoAutism = statusParam === "no-autism";
  const yesCount = Number.isFinite(yesCountParam) ? yesCountParam : 0;

  const [answers, setAnswers] = useState<(Answer | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as { answers: (Answer | null)[] };
      if (Array.isArray(parsed.answers)) {
        setAnswers(parsed.answers);
      }
    } catch (error) {
      console.warn("Could not parse stored answers", error);
    }
  }, []);

  const affirmativePrompts = useMemo(() => {
    if (!answers.length) {
      return [];
    }

    return questions
      .map((question, index) => ({
        question,
        answer: answers[index]
      }))
      .filter((item) => item.answer === "yes")
      .map((item) => item.question.title);
  }, [answers]);

  const handleRestart = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    router.push("/");
  };

  return (
    <section className="card result-card">
      <h2>
        {isPositive
          ? "Your responses suggest notable autistic traits"
          : isNoAutism
            ? "Your responses do not indicate autism"
            : "Your responses suggest fewer autistic traits"}
      </h2>
      <p>
        {isPositive
          ? "These answers highlight several traits commonly associated with autism. Consider sharing them with a licensed professional for a full evaluation."
          : isNoAutism
            ? "Based on your responses, this screening does not identify signs linked to autism. Keep observing your child’s development and reach out to a professional if new concerns emerge."
            : "Your answers show only a few traits that overlap with autism. You can still discuss the results with a professional if you have ongoing questions."}
      </p>
      {affirmativePrompts.length > 0 &&(
        <>
          <h3>Where you noticed similarities</h3>
          <ul>
            {affirmativePrompts.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </>
      ) }
      <div className="actions">
        <button type="button" className="primary" onClick={handleRestart}>
          Retake the test
        </button>
      </div>
      <p className="muted">
        This self-assessment is not a diagnostic tool. Use it as a starting point for conversations
        with qualified medical professionals.
      </p>
    </section>
  );
}
