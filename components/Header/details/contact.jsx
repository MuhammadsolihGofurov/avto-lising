import { email, phone_number } from "@/variable/need";
import React from "react";

export default function Contact({ isMobile }) {
  return (
    <div
      className={`flex items-center ${
        isMobile ? "flex-col small:flex-row gap-4 sm:gap-10" : ""
      }`}
    >
      <a
        href={`mailto:${email}`}
        target="_blank"
        title={email}
        className="flex items-center text-white gap-3 font-medium text-sm hover:text-main"
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.1958 1.14038H19.1958C20.2958 1.14038 21.1958 2.04038 21.1958 3.14038V15.1404C21.1958 16.2404 20.2958 17.1404 19.1958 17.1404H3.1958C2.0958 17.1404 1.1958 16.2404 1.1958 15.1404V3.14038C1.1958 2.04038 2.0958 1.14038 3.1958 1.14038Z"
            stroke="#F9B253"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.1958 3.14038L11.1958 10.1404L1.1958 3.14038"
            stroke="#F9B253"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{email}</span>
      </a>
      <a
        href={`tel: ${phone_number}`}
        target="_blank"
        title={phone_number}
        className="flex items-center text-white gap-3 font-medium text-sm hover:text-main"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8881 15.9201V18.9201C20.8892 19.1986 20.8322 19.4743 20.7206 19.7294C20.6091 19.9846 20.4454 20.2137 20.2402 20.402C20.035 20.5902 19.7927 20.7336 19.5289 20.8228C19.265 20.912 18.9855 20.9452 18.7081 20.9201C15.631 20.5857 12.6751 19.5342 10.0781 17.8501C7.66194 16.3148 5.61345 14.2663 4.07812 11.8501C2.38809 9.2413 1.33636 6.27109 1.00812 3.1801C0.983127 2.90356 1.01599 2.62486 1.10462 2.36172C1.19324 2.09859 1.33569 1.85679 1.52288 1.65172C1.71008 1.44665 1.93792 1.28281 2.19191 1.17062C2.44589 1.05843 2.72046 1.00036 2.99812 1.0001H5.99812C6.48342 0.995321 6.95391 1.16718 7.32188 1.48363C7.68985 1.80008 7.93019 2.23954 7.99812 2.7201C8.12474 3.68016 8.35957 4.62282 8.69812 5.5301C8.83266 5.88802 8.86178 6.27701 8.78202 6.65098C8.70227 7.02494 8.51698 7.36821 8.24812 7.6401L6.97812 8.9101C8.40167 11.4136 10.4746 13.4865 12.9781 14.9101L14.2481 13.6401C14.52 13.3712 14.8633 13.1859 15.2372 13.1062C15.6112 13.0264 16.0002 13.0556 16.3581 13.1901C17.2654 13.5286 18.2081 13.7635 19.1681 13.8901C19.6539 13.9586 20.0975 14.2033 20.4146 14.5776C20.7318 14.9519 20.9003 15.4297 20.8881 15.9201Z"
            stroke="#F9B253"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>{phone_number}</span>
      </a>
    </div>
  );
}
