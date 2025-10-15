"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../../data/questions";

type Answer = "yes" | "no";

const STORAGE_KEY = "autism-self-test-answers";
const POSITIVE_THRESHOLD = 7;

type PersistedState = {
  answers: (Answer | null)[];
  currentIndex: number;
};

const emptyAnswers = (): (Answer | null)[] =>
  Array.from({ length: questions.length }, () => null);

export default function QuizPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState<(Answer | null)[]>(() => emptyAnswers());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setIsHydrated(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as PersistedState;
      const storedAnswers = Array.isArray(parsed.answers) ? parsed.answers : null;
      const storedIndex =
        typeof parsed.currentIndex === "number" && parsed.currentIndex >= 0
          ? Math.min(parsed.currentIndex, questions.length - 1)
          : 0;

      if (storedAnswers && storedAnswers.length === questions.length) {
        setAnswers(storedAnswers);
        setCurrentIndex(storedIndex);

        const yesCount = storedAnswers.filter((value) => value === "yes").length;
        const answeredCount = storedAnswers.filter((value) => value !== null).length;
        if (yesCount >= POSITIVE_THRESHOLD) {
          router.replace(`/result?status=positive&yesCount=${yesCount}`);
          return;
        }
        if (answeredCount === questions.length) {
          router.replace(`/result?status=no-autism&yesCount=${yesCount}`);
          return;
        }
      }
    } catch (error) {
      console.warn("Could not parse stored answers", error);
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, [router]);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    const payload: PersistedState = {
      answers,
      currentIndex
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [answers, currentIndex, isHydrated]);

  const progress = useMemo(() => {
    const yesProgress = answers.filter((value) => value === "yes").length / POSITIVE_THRESHOLD;
    const answeredProgress = answers.filter((value) => value !== null).length / questions.length;

    return Math.round(Math.max(yesProgress, answeredProgress) * 100);
  }, [answers]);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];

  const handleAnswer = (selection: Answer) => {
    const updated = [...answers];
    updated[currentIndex] = selection;

    const yesCount = updated.filter((value) => value === "yes").length;
    const answeredCount = updated.filter((value) => value !== null).length;

    setAnswers(updated);

    if (yesCount >= POSITIVE_THRESHOLD) {
      router.push(`/result?status=positive&yesCount=${yesCount}`);
      return;
    }

    if (answeredCount === questions.length) {
      const status = yesCount >= POSITIVE_THRESHOLD ? "positive" : "no-autism";
      router.push(`/result?status=${status}&yesCount=${yesCount}`);
      return;
    }

    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
  };

  return (
    <>
      <div className="top-progress" aria-hidden="true">
        <div className="top-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <section className="card" aria-live="polite">

        <article className="question">
          <p>{currentQuestion.prompt}</p>
        </article>

        <div className="choices centered choices-large" role="group" aria-label="Answer choices">
          <button
            type="button"
            className={`choice-button choice-yes ${currentAnswer === "yes" ? "selected" : ""}`}
            onClick={() => handleAnswer("yes")}
            aria-pressed={currentAnswer === "yes"}
          >
            Yes
          </button>
          <button
            type="button"
            className={`choice-button choice-no ${currentAnswer === "no" ? "selected" : ""}`}
            onClick={() => handleAnswer("no")}
            aria-pressed={currentAnswer === "no"}
          >
            No
          </button>
        </div>

      </section>
    </>
  );
}
