import { thousandSeperate } from "@/utils/funcs";
import { useState } from "react";
import { Button } from "../custom";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { toggleCallModal } from "@/redux/slice/settings";

export default function Price() {
  const [carPrice, setCarPrice] = useState(96932000);
  const [initialPaymentPercent, setInitialPaymentPercent] = useState(30);
  const [termMonths, setTermMonths] = useState(12);
  const [interestRate] = useState(7); // Yillik foiz stavka
  const intl = useIntl();
  const dispatch = useDispatch();

  const calculateMonthlyPayment = () => {
    const initialPayment = (carPrice * initialPaymentPercent) / 100;
    const loanAmount = carPrice - initialPayment;
    const monthlyRate = interestRate / 12 / 100;
    const n = termMonths;

    const A =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
      (Math.pow(1 + monthlyRate, n) - 1);

    return { A: A.toFixed(0), initialPayment: initialPayment.toFixed(0) };
  };

  const results = calculateMonthlyPayment();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center py-20">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {intl.formatMessage({ id: "calculatorTitle" })}
        </h1>

        {/* Car Price Slider */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">
            {intl.formatMessage({ id: "carsPrice" })}
          </label>
          <input
            type="range"
            min="50000000"
            max="1000000000"
            step="1000000"
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="text-right text-blue-700 font-semibold mt-2">
            {carPrice.toLocaleString()} so'm
          </div>
        </div>

        {/* Initial Payment Slider */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">
            {intl.formatMessage({ id: "initialPayment" })}
          </label>
          <input
            type="range"
            min="10"
            max="60"
            value={initialPaymentPercent}
            onChange={(e) => setInitialPaymentPercent(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="text-right text-blue-700 font-semibold mt-2">
            {initialPaymentPercent}%
          </div>
        </div>

        {/* Term Slider */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-3">
            {intl.formatMessage({ id: "termSlider" })}
          </label>
          <input
            type="range"
            min="12"
            max="60"
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="text-right text-blue-700 font-semibold mt-2">
            {termMonths} oy
          </div>
        </div>

        {/* Results */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner text-gray-800">
          <h2 className="text-xl font-semibold text-center mb-4">
            {intl.formatMessage({ id: "natijalar" })}
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span>{intl.formatMessage({ id: "oylikTolov" })}</span>
            <span className="font-bold text-main">
              {thousandSeperate(results.A.toLocaleString())} so'm
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>{intl.formatMessage({ id: "dastlabkiTolov" })}</span>
            <span className="font-bold text-main">
              {thousandSeperate(results.initialPayment.toLocaleString())} so'm
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <Button type="button" onClick={() => dispatch(toggleCallModal())}>
            {intl.formatMessage({ id: "sendAriza" })}
          </Button>
        </div>
      </div>
    </div>
  );
}
