import React from "react";
import "../styles/global.css";
import pulseMain from "../images/pulsewatch.png";
import pulseStep from "../images/step.png";

function App() {
  return (
    <div className="container min-w-full min-h-full bg-gray-100">
      <div className="first w-full p-4 flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold">Pulse</h1>
        <h4>a watch</h4>
      </div>
      <div className="second w-full h-4/5">
        <div className="flex justify-center items-center">
          <img src={pulseMain} alt="a watch" className="w-3/12" />
          <img src={pulseMain} alt="a watch" className="w-3/12" />
          <img src={pulseMain} alt="a watch" className="w-3/12" />
          <h1 className="absolute text-7xl font-bold ">
            The future starts today, not tommorow.
          </h1>
        </div>
      </div>
      <div className="third w-full p-20">
        <ul className="flex justify-between">
          <li className="text-2xl">
            <span className="text-5xl">#1</span> <br />
            in the watch industry
          </li>
          <li className="text-2xl">
            <span className="text-5xl">Innovative</span> <br />
            data-driven features
          </li>
          <li className="text-2xl">
            <span className="text-5xl">Over 8 million</span> <br />
            satisfied customers
          </li>
          <li className="text-2xl">
            <span className="text-5xl">500 million</span> <br />
            watches sold worldwide
          </li>
        </ul>
      </div>
      <div className="fourth grid grid-cols-2">
        <div className="flex justify-center items-center">
          <h4 className="activityText text-5xl font-bold text-center">
            <span className="block">Your</span>
            <span className="block">ultimate</span>
            <span className="block">companion</span>
            <span className="block">for</span>
            <span className="block">daily</span>
            <span className="block">activity.</span>
          </h4>
        </div>
        <div className="">
          <img src={pulseStep} alt="people running" className="w-full" />
        </div>
      </div>
      <div className="fifth w-full p-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="text-2xl max-w-3xl">
            I've been using the Pulse watch for a month now and I'm impressed.
            The sleek design makes it stylish, while the long battery life means
            I rarely have to charge it. The health features, like heart rate
            monitoring and sleep tracking, are extremely helpful. Highly
            recommend it!
          </h4>
          <p className="text-xl font-bold">-John Doe, Client</p>
        </div>
      </div>
      <div className="sixth flex justify-between p-20">
        <div className="h-96 w-96 p-4 shadow-2xl rounded-md ">
          <img src={pulseMain} alt="a watch" className="max-w-52 max-h-52" />
          <h1 className="text-2xl font-bold">Pulse Pro</h1>
          <ul>
            <li>Limited smartwatch features</li>
            <li>Basic step tracking</li>
          </ul>
          <p className="text-xl font-bold p-4">$199</p>
        </div>
        <div className="h-96 w-96 p-4 shadow-2xl rounded-md">
          <img src={pulseMain} alt="a watch" className="max-w-52 max-h-52" />
          <h1 className="text-2xl font-bold">Pulse Pro Max</h1>
          <ul>
            <li>Advanced activity monitoring</li>
            <li>Durable, waterproof design</li>
          </ul>
          <p className="text-xl font-bold p-4">$299</p>
        </div>
        <div className="h-96 w-96 p-4 shadow-2xl rounded-md">
          <img src={pulseMain} alt="a watch" className="max-w-52 max-h-52" />
          <h1 className="text-2xl font-bold">Pulse Ultra</h1>
          <ul>
            <li>Full smartwatch capabilities</li>
            <li>Premium materials</li>
          </ul>
          <p className="text-xl font-bold p-4">$499</p>
        </div>
      </div>
    </div>
  );
}

export default App;
